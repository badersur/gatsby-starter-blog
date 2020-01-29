/* eslint-disable import/prefer-default-export */
import path from "path";
import { GatsbyNode } from "gatsby";

interface Node {
    fields: {
        slug: string;
    };
    frontmatter: {
        title: string;
    };
}

export interface BlogPostPageContext {
    previous: Node;
    next: Node;
}

interface AllMarkdownRemarkData {
    allMarkdownRemark: {
        edges: {
            node: Node;
        }[];
    };
}

export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
}) => {
    const { createPage } = actions;

    const blogPost = path.resolve(
        __dirname,
        "..",
        `src/templates/blog-post.tsx`
    );

    const result = await graphql<AllMarkdownRemarkData>(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        throw result.errors;
    }

    if (!result.data) {
        throw new Error(`No data Available!`);
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        });
    });
};
