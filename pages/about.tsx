import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I am a passionate Full-Stack Web Developer with a strong
              foundation in both front-end and back-end technologies. With
              experience building dynamic, responsive web applications, I am
              proficient in creating intuitive user interfaces as well as robust
              server-side functionality. My skill set includes JavaScript,
              Node.js, React, and Express, among other modern frameworks and
              tools. I am dedicated to writing clean, efficient code and
              continuously improving my development skills. Whether it's working
              with databases, setting up RESTful APIs, or deploying
              applications, I thrive on solving complex problems and delivering
              solutions that enhance the user experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
