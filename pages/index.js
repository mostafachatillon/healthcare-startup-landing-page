import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Hero, Navbar, Footer,
} from '../components';

export default () => (
  <div>
    <Head>
      <title>ChingHub - Precision Medicine Hub</title>
    </Head>
    <Navbar />
    <Hero />
    <Services />
    <Contents />
    <Footer />
  </div>
);
