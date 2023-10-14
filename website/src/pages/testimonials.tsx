import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function Header() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">Testimonials</Heading>
      <p>Pants is helping piles of software teams. Here's what some of them have to say.</p>
      <Link className="button button--primary" to="/404">
        Add your testimonial
      </Link>
    </section>
  );
}



export default function Testimonials(): JSX.Element {
  return (
    <Layout description="Testimonials">
      <main className="margin-vert--lg">
        <Header />

      </main>
    </Layout>
  );
}
