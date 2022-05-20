import React from "react";
import { Container } from "semantic-ui-react";
import Head from 'next/head';
import Header from "./Header"
 
const Layout = (props) => {
  return (
      <Container>
        <Head>
          <link
              async
              rel="stylesheet"
              href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css"
          />
        </Head>
        <Header />
        {props.children}
      </Container>
  )
};

// Escrever algo em baixo do {props.children} seria como um footer da página

export default Layout;