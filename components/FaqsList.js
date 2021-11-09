import React from "react";

import Faq from "./Faq";
import { StyledFaqsList } from "./faqStyles";

const faqsData = [
  {
    question: "What is Mystic Sisterhood?",
    answer: [
      "Mystic Sisterhood is a NFT project of 7,777 programmatically generated and mystically inclined women, all registered on the Ethereum blockchain. Holding one of these NFTs grants you 100% creative, ownership, and commercial rights to your Mystic Sister. ",
      "In addition, Mystic Sisterhood is a community built for individuals to connect, learn, and grow with each other. Whatever your passions may be, we hope you find your place here. ",
      "Note: 150 Sisters are being withheld from the sale. These will be used for giveaways, partnerships, and the development team's membership to the community.",
    ],
  },
  {
    question: "Who is the artist?",
    answer: [
      "Lisa Manton is an illustrator and designer from Ireland. She graduated from the Limerick School of Art and Design in 2013 where she majored in Fine Art, Printmaking and Contemporary Practice. ",
      "Since graduating, Lisa has focused on developing her own personal illustration style which embraces fun color palettes, ideas and textures. ",
      "Lisa’s catalogue of work includes: NFT digital art, commercial and editorial illustrations, gaming background design, greeting card design and production. ",
      "https://lisamanton.com/",
    ],
  },
  { question: "Will there be a presale?", answer: ["Yes! Details to come."] },
  {
    question: "How many can I purchase?",
    answer: [
      "You can purchase up to 20 NFTs per transaction for the price of 0.05 ETH each.",
    ],
  },
];

const FaqsList = () => {
  return (
    <StyledFaqsList>
      {faqsData.map((faq, i) => (
        <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
      ))}
    </StyledFaqsList>
  );
};

export default FaqsList;
