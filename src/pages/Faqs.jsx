import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

import faq from "../assets/images/faq.jpg";

const Faqs = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  const faqData = [
    {
      id: 1,
      question: "What does Horizon do?",
      answer:
        "We are a Edinburgh based sales and marketing specialist. Our unique and personalised approach focuses on increasing brand exposure and market share for our clients; providing both quality and loyal customer base for some of the most recognised and upcoming brands across the UK. We have the motivation, determination and ambition to become the best of the best. Business is extremely competitive, but with our innovative methods, great team ethos, culture and environment we aim to become number one in our field across our hometown of Edinburgh, the UK and then Worldwide.",
    },
    {
      id: 2,
      question: "What makes Horizon different from other companies?",
      answer:
        "Our company culture and environment separate us from the competition. We have an ambitious, exciting and welcoming team willing to go the extra mile to meet and exceed our clients' needs.",
    },
    {
      id: 3,
      question: "What is a 'no seniority policy'?",
      answer:
        "If the only way you can advance in a job is simply by working there for a certain amount of time, you have little incentive to work harder than others. That's why we have a no seniority policy. Here at Horizon, we believe that consistently reviewing and rewarding performance encourages a happier and more productive workplace. We have 100% promotions from within policy based on performance irrespective of the length of time worked at the company.",
    },
    {
      id: 4,
      question: "What makes our form of marketing so effective?",
      answer:
        "We are a full-service marketing company. Through our personalised campaigns, we are able to connect with consumers through face-to-face marketing methods which helps to create a long-lasting bond between brand and consumer. Due to the direct nature of our process, we are able to produce highly measurable results that can be delivered daily, weekly, or monthly. This way we can make any necessary changes to your campaign. By creating campaigns that consumers can really identify with, we are more effective than traditional forms of marketing and can increase our clients’ customer acquisition. Through utilising our services, your brand can benefit from our extensive market research. We are able to create an ideal consumer profile and generate hot leads to follow to increase results.",
    },
    {
      id: 5,
      question: "What clients do you work with?",
      answer:
        "We work with multiple clients in a range of sectors such as energy, telecommunications, non-profit organisations, banks, entertainment companies. Our unique business model and team of experts mean that we are not restricted to one industry.",
    },
    {
      id: 6,
      question: "What career could I have at Horizon?",
      answer:
        "A career at Horizon is fast-paced, lucrative and rewarding. We coach in areas of sales, customer relations, recruitment, marketing, human resources, finance and administration.",
    },
    {
      id: 7,
      question: "I would like to work with Horizon, who shall I contact?",
      answer:
        "Please contact our HR department at recruitment@horizon.co.uk for more information on current campaigns and where you or your business can fit in.",
    },
    {
      id: 8,
      question: "Horizon reviews",
      answer:
        "Wondering what it's like to work for Horizon? Check out our Testimonials on the Opportunities page!",
    },
  ];

  return (
    <div className="faqs page">
      <div
        className="background-wrapper"
        style={{ backgroundImage: `${faq}` }}
      ></div>

      <h1 className="page-title">FAQ's</h1>
      <div className="faq-content">
        <div className="faq-accordion">
          {faqData.map((faq) => (
            <div key={faq.id} className="faq-card">
              <div
                className={`card-title ${
                  activeCard === faq.id ? "active" : ""
                }`}
                onClick={() => toggleCard(faq.id)}
              >
                {faq.question}
                <IoIosArrowDropright
                  className={`arrow-icon ${
                    activeCard === faq.id ? "rotated" : ""
                  }`}
                />
              </div>
              <div
                className={`card-content ${
                  activeCard === faq.id ? "expanded" : "collapsed"
                }`}
              >
                <div className="card-text-wrapper">
                  <p className="card-text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
