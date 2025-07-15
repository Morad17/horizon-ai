import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const MoneyGenerated = () => {
  return (
    <div className="money-generated">
      <h2 className="page-title">Money Generated</h2>
      <div className="background-wrapper"></div>
      <div className="sectors">
        <div className="sector-card non-profit">
          <h3 className="card-title">Charity</h3>
          <div className="card-animation">
            <DotLottieReact
              src="https://lottie.host/2a427cd2-af3b-40d7-946b-d7f25a5ce196/D00wj0597w.lottie"
              loop
              autoplay
              className="card-image"
            />
          </div>
          <div className="card-stat">
            {/* <p className="pound-sign"> £</p> */}
            {/* <AnimatedNumbers
              useThousandsSeparator
              className="animated-stats"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={523000}
              fontStyle={{
                fontSize: 40,
                color: "black",
              }}
            /> */}
          </div>
        </div>
        <div className="sector-card charity">
          <h3 className="card-title">Solar</h3>
          <div className="card-animation">
            <DotLottieReact
              src="https://lottie.host/181a001b-bdce-4e9f-b3ab-f8ffca28a205/kLYjO3elNY.lottie"
              loop
              autoplay
            />
          </div>
          <div className="card-stat">
            {/* <p className="pound-sign"> £</p> */}
            {/* <AnimatedNumbers
              useThousandsSeparator
              className="animated-stats"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={123456}
              fontStyle={{
                fontSize: 40,
                color: "black",
              }}
            /> */}
          </div>
        </div>
        <div className="sector-card utilities">
          <h3 className="card-title">Energy</h3>
          <div className="card-animation">
            <DotLottieReact
              src="https://lottie.host/ba14ba50-c81a-476c-97bf-7bdcbacddee3/P8uCCBi3YR.lottie"
              loop
              autoplay
              className="card-image"
            />
          </div>
          <div className="card-stat">
            {/* <p className="pound-sign"> £</p> */}
            {/* <AnimatedNumbers
              useThousandsSeparator
              className="animated-stats"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={123456}
              fontStyle={{
                fontSize: 40,
                color: "black",
              }}
            /> */}
          </div>
        </div>
        <div className="sector-card utilities">
          <h3 className="card-title">Ai</h3>
          <div className="card-animation">
            <DotLottieReact
              src="https://lottie.host/15ae034e-b39a-482a-86aa-422a9b48ede5/NGiyPJolrg.lottie"
              loop
              autoplay
            />
          </div>
          <div className="card-stat">
            {/* <p className="pound-sign"> £</p> */}
            {/* <AnimatedNumbers
              useThousandsSeparator
              className="animated-stats"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={123456}
              fontStyle={{
                fontSize: 40,
                color: "black",
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyGenerated;
