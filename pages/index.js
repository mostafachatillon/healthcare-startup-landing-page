import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Hero, Navbar, Footer,
} from '../components';

export default () => (
  <div>
    <Head>
      <title>ChingHub - Precision Medicine Hub</title>


    <meta
          property="og:description"
          content="ChingHub is a global network accelerating precision medicine and immunotherapy research"
        />
        <meta property="og:image" content={"./assets/illustration-2.svg"} />

    </Head>
    <Navbar />
    <Hero />
    <Services />
    <Contents />
    <Footer />
  </div>
);
