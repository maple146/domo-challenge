import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Domo - Maqueta</title>
        <meta name="description" content="Maqueta para el challenge de Domo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className="px-3 mx-auto">
          <Header />
        </Container>
        <Hero />
        <Container className="px-3 mx-auto">
          <Footer />
        </Container>
      </main>
    </>
  );
}
