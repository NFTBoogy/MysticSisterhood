import styled from "styled-components";

export const StyledFaq = styled.div`
  cursor: pointer;
  margin: 0 0 10px;

  div.faq-question {
    font-size: 1.7rem;
    color: #fff;
    font-weight: 800;
    margin: 1.5rem 0 1.5rem 0;
    font-family: Adelle;
  }

  div.faq-answer {
    overflow: hidden;
    font-family: AvenirHand;
    color: #fff;
    font-weight: bold;
    font-size: 1.7rem;
    border-radius: 10px;

    span {
      display: block;
      padding: 20px 10px;
    }
  }
`;

export const StyledFaqsList = styled.div`
  margin: 20px 0;
  padding: 1rem;

  width: 75%;
  border-radius: 10px;
  @media (max-width: 1150px) {
    width: 85%;
  }
  @media (max-width: 820px) {
    width: 93%;
  }
`;
