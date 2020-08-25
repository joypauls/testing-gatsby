/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { PageProps, Link, graphql } from "gatsby";
import { Button, Flex, Text, Box, Card } from "rebass";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import Placeholder from "../components/placeholder";

// post data from graphql
type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
      isUp: boolean
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

// const BlogContent = () =>

const SiteDownContent = () => {
  return (
    <Fragment>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <h3>Working on it!</h3>
        </header>
        <main style={{ display: "flex", flexDirection: "column", }}>
          <h5>sdngjksfdgnjdkgfbnjkn</h5>
        </main>
      </div>

      <Placeholder />

    </Fragment>
  );
};

const BlogIndex = ({ data, location }: PageProps<Data>) => {

  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMarkdownRemark.edges;
  const siteIsUp = data.site.siteMetadata.isUp;

  let content;

  if (siteIsUp) {
    content = (
      <Layout location={location} title={siteTitle} description={siteDescription}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <PostCard
              title={node.frontmatter.title}
              slug={node.fields.slug}
              description={node.frontmatter.description}
              excerpt={node.excerpt}
              date={node.frontmatter.date}
            />
          );
        })}
      </Layout>
    );
  } else {
    content = (
      <SiteDownContent />
    );
  }

  return ( content );
};

export default BlogIndex;

// query to get posts
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        isUp
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
