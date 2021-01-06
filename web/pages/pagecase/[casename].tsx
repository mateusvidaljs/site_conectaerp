import { useRouter } from "next/router";
import Head from 'next/head';

import Case from "../../components/Case";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import TalkToSpecialist from "../../components/TalkToSpecialist";
import WhoTrust from "../../components/WhoTrust";
import { useEffect, useState } from "react";

const PageCase = () => {
  return (
    <>
      <Head>
        <title>Conecta | ERP para a era digital</title>
      </Head>

      <section id="case" className="web-page">
        <Header />

        <Main>
          <Case />
        </Main>

        <WhoTrust />

        <TalkToSpecialist />

        <ContactForm />

        <Footer />
      </section>
    </>
  );
}

export default PageCase;