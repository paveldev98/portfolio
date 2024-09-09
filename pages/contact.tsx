import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Looking to collaborate on a project or have any questions? I’d
              love to hear from you! Feel free to reach out through any of the
              channels below, and I’ll get back to you as soon as possible.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: jovanovpavel@gmail.com</li>
              <li className="contact-item">Phone: +38651308190</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
