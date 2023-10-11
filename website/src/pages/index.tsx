import React from 'react';
import Layout from '@theme/Layout';
import Index from './_index.mdx';

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Pantsbuild: The ergonomic build system">
      <Index />
    </Layout>
  );
}
