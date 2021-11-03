import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Fader from "../components/Fader";
import FadeIn from "react-fade-in";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mystic Sisterhood | 7,777 Mystic Women</title>
        <meta
          name="description"
          content="Mystic Sisterhood is a community full of good energy where creatives can support each other. We welcome all enlightened beings. Whether you are drawn to magical things, or just like the art, there is something here for everyone!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>

      <img
        className={styles.logo}
        src="/images/mystic sisterhood logo color.png"
      />

      <main className={styles.main}>
        <h3 className={styles.subtitle}>
          A collection of 7,777 mystically inclined women, all welcoming you
          home.
        </h3>

        <Fader />
        <hr
          className={`${styles.hr} ${styles.animated} ${styles.fadeInUp} ${styles.animatedFadeInUp}`}
        />
        <img
          src="/images/banner.jpg"
          alt="Mystic Sisters Banner"
          className={styles.banner}
        />
        <hr
          className={`${styles.hr} ${styles.animated} ${styles.fadeInUp} ${styles.animatedFadeInUp}`}
        />

        <FadeIn className={styles.noteContainer} transitionDuration={1000}>
          <h1 className={styles.leftTitle}>GOOD VIBES ONLY</h1>
          <p className={styles.description}>
            Mystic Sisterhood is a community full of good energy where creatives
            can support each other.
          </p>
          <p className={styles.description}>
            We welcome all enlightened beings. Whether you are drawn to magical
            things, or just like the art, there is something here for everyone!
          </p>
        </FadeIn>
        <hr
          className={`${styles.hr} ${styles.animated} ${styles.fadeInUp} ${styles.animatedFadeInUp}`}
        />
        <FadeIn
          className={styles.noteContainer}
          transitionDuration={800}
          delay={1200}
        >
          <h1 className={styles.noteTitle}>Note from Lisa</h1>
          <p className={styles.lisaNote}>
            {`Hi my name is Lisa, thanks for coming by to check out the Mystic
          Sisterhood. Here's a little about me and the project: I am a Fine Art
          graduate from Ireland now living in Toronto. Women have been the
          forefront of my work for a long time now and this has evolved over the
          years from hand drawn illustrations to digital illustrations. Given
          that Ireland is flooded with all things magical & mystical (there’s so
          much magic pouring out of every part of the island) it is only fitting
          that I incorporate this into my work and acknowledge my heritage. I
          love a good story behind anything I do, so I guess this is part of
          mine. This collection is an exciting way for me to bring my art and
          ideas into the nft art world and hopefully share them with lots of
          people. The nft art world is very new to me, but I am excited to be a
          part of it and use this project to give back to the art community and
          look at ways to support other artists along the way.`}
          </p>
        </FadeIn>
      </main>
      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image
            src="/images/mystic sisterhood logo color.png"
            alt="Vercel Logo"
            width={800}
            height={500}
          />
        </span>
      </footer>
    </div>
  );
}
