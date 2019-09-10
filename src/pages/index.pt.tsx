import { graphql } from "gatsby";
import React from "react";
import Link from "gatsby-link";
import Layout from "../layouts/pt";

const IndexPage = props => (
  <Layout location={props.location} {...props}>
    <div>
      <h1>Oi povo</h1>
      <p>Bem vindo ao seu novo multi-idioma Gatsby site.</p>
      <p>Agora va construir alguma coisa grandiosa.</p>
      <Link to="/pt/page-2/">Ir pra página 2</Link>
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query LayoutPt {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
