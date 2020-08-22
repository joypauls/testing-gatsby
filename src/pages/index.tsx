/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { PageProps, Link, graphql } from "gatsby";
import { Button, Flex, Text, Box, Card } from "rebass";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

// post data from graphql
type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
};

const postCardStyle = {
  p: rhythm(1/2),
  borderRadius: 4,
  boxShadow: '0 0 8px rgba(0, 0, 0, .25)',
  border: "solid 4px",
  borderColor: "primary",
  marginBottom: rhythm(2),
  width: "100%",
  maxWidth: rhythm(24),
  alignSelf: "center", // should put this in css in layout as a selector of child elements
};

const PostCard = ({...props}) => {
  return (
    <Card sx={postCardStyle}>
      <article key={props.slug}>
        <header>
          <h3
            style={{
              marginTop: rhythm(1 / 2),
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={props.slug}>
              {props.title}
            </Link>
          </h3>
          <small>{props.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: props.description || props.excerpt,
            }}
            style={{
              marginBottom: rhythm(1 / 2),
            }}
          />
        </section>
      </article>
    </Card>
  );
};

const BlogIndex = ({ data, location }: PageProps<Data>) => {

  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle} description={siteDescription}>
      <SEO title="All posts" />
      {/* <Bio /> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <PostCard
            title={node.frontmatter.title}
            slug={node.fields.slug}
            description={node.frontmatter.description}
            excerpt={node.excerpt}
            date={node.frontmatter.date}
          />
        )
      })}
    </Layout>
  );
};

export default BlogIndex;

// query to get posts
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
