import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Fader from "../components/Fader";
import Counter from "../components/Counter";
import Bar from "../components/Bar";
import FaqsList from "../components/FaqsList";
import FadeIn from "react-fade-in";
import data from "../public/data/about";

export default function Home() {
  const items = [
    {
      percent: "10%",
      text: "Discord AMA with our artist and founder, Lisa Manton and team",
    },
    {
      percent: "25%",
      text: "7 Mystic Sisters released and delivered at random to wallets already containing at least one Mystic Sister",
    },
    {
      percent: "50%",
      text: "Original 1/1 piece by artist Lisa Manton airdropped into one Mystic Sisterhood holder’s wallet",
    },
    { percent: "75%", text: "Donation to charity (community voted)" },
    {
      percent: "100%",
      text: "Start Mystic Sisterhood Arts Program to help support and sponsor budding artists and artistic programs",
    },
  ];

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

        <Counter />
        <Bar />
        <img
          src="/images/banner.jpg"
          alt="Mystic Sisters Banner"
          className={styles.banner}
        />
        <Bar />

        <FadeIn className={styles.noteContainer} transitionDuration={1000}>
          <h1 className={styles.leftTitle}>
            <img src="/images/pestle.png" alt="mortar and pestle" width={50} />{" "}
            <span>GOOD VIBES ONLY</span>
          </h1>
          <div className={styles.vibesContainer}>
            <div className={styles.vibesImage}>
              <img
                className={styles.slides}
                src="/images/lady.jpg"
                alt="Lisa the artist"
                width={500}
              />
            </div>
            <div className={styles.vibesTextContainer}>
              <p className={styles.description}>
                Mystic Sisterhood is a community full of good energy where
                creatives can support each other.
              </p>
              <p className={styles.description}>
                We welcome all enlightened beings. Whether you are drawn to
                magical things, or just like the art, there is something here
                for everyone!
              </p>
            </div>
          </div>
        </FadeIn>
        <Bar />
        <FadeIn
          className={styles.noteContainer}
          transitionDuration={800}
          delay={1200}
        >
          <h1 className={styles.noteTitle}>
            <img
              src="/images/Purple journal.png"
              alt="purple journal"
              width={50}
            />{" "}
            Note from Lisa
          </h1>
          <div className={styles.letterContainer}>
            <div className={styles.letterTextContainer}>
              <p className={styles.lisaNote}>
                Hi my name is Lisa, thanks for coming by to check out the Mystic
                Sisterhood.
              </p>
              <p className={styles.lisaNote}>
                I am a Fine Art graduate from Ireland now living in Toronto.
                Women have always been at the forefront of my work and this
                project is no different.
              </p>
              <p className={styles.lisaNote}>
                Throughout my life I have had an amazing support network of
                women -- both family and friends -- all of whom I consider in
                some way, shape, or form to be intuitive, spiritual and of a
                mystic nature. It is that common trait that has bonded us. This
                collection is an ode to those women and any other woman who has
                been there for another, whilst also paying homage to my Irish
                heritage.
              </p>
              <p className={styles.lisaNote}>
                The NFT art world is very new to me, but I am excited to be a
                part of it and use this project to give back to the art
                community and look at ways to support other artists along the
                way.
              </p>
            </div>
            <div className={styles.letterImage}>
              <img
                className={styles.slides}
                src="/images/lisa.jpeg"
                alt="Lisa the artist"
                width={500}
              />
            </div>
          </div>
          <Image
            src="/images/Signature.png"
            alt="signature"
            width={300}
            height={168}
          />
        </FadeIn>
        <Bar />
        <h1 className={styles.aboutTitle}>
          <img src="/images/ball.png" alt="crystal ball" width={50} /> ABOUT US
        </h1>
        <div className={styles.aboutContainer}>
          {data.map((person, key) => (
            <div key={key} className={styles.card}>
              <img
                src={person.imageURL}
                alt={`${person.name}'s image`}
                className={styles.aboutImage}
              />
              <p className={styles.cardText}>{person.name}</p>
              <a
                className={`${styles.cardText} ${styles.aboutText}`}
                href={`https://twitter.com/${person.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                {person.twitter}
              </a>
            </div>
          ))}
        </div>
        <Bar />
        <h1 className={styles.aboutTitle}>
          <img src="/images/candles.png" alt="candles" width={50} /> ROADMAP
        </h1>
        <div className={styles.roadmapContainer}>
          <div className={styles.roadmapTextContainer}>
            {items.map((item, key) => (
              <p key={key} className={styles.roadmapText}>
                <span className={styles.percent}>{item.percent}</span>
                {item.text}
              </p>
            ))}
          </div>
          <div className={styles.roadmapImage}>
            <img
              className={styles.slides}
              src="/images/slides.gif"
              alt="slides of mystic sisters"
              width={500}
            />
          </div>
        </div>
        <Bar />
        <h1 className={styles.aboutTitle}>FAQ</h1>
        <FaqsList />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <a
            className={styles.footerIcon}
            href="https://twitter.com/MysticSisNFT"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/twitter-64.png"
              alt="twitter"
              height={64}
              width={64}
            />
          </a>
          <a
            className={styles.footerIcon}
            href="https://discord.gg/RrKU6zjetw"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/discord-64.png"
              alt="discord"
              height={64}
              width={64}
            />
          </a>
        </div>
      </footer>
      <div className={styles.termsLink}>
        <Link href="/terms">{`Terms & Conditions`}</Link>
      </div>
    </div>
  );
}
