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
          <h3 className="card-title">Non-Profit</h3>
          <div className="card-animation">
            <DotLottieReact
              src="https://lottie.host/2a427cd2-af3b-40d7-946b-d7f25a5ce196/D00wj0597w.lottie"
              loop
              autoplay
              className="card-image"
            />
          </div>
          <div className="card-stat">
            <p className="pound-sign"> £</p>
            <AnimatedNumbers
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
            />
          </div>
        </div>
        <div className="sector-card charity">
          <h3 className="card-title">Charity</h3>
          <div className="card-animation">
            <DotLottieReact
              src="https://lottie.host/1342f5f4-e04f-4c69-9d94-1b3d5c2e4265/yRD2LC1EKp.lottie"
              loop
              autoplay
              className="card-image"
            />
          </div>
          <div className="card-stat">
            <p className="pound-sign"> £</p>
            <AnimatedNumbers
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
            />
          </div>
        </div>
        <div className="sector-card utilities">
          <h3 className="card-title">Utilities</h3>
          <div className="card-animation">
            <DotLottieReact
              src="https://lottie.host/ba14ba50-c81a-476c-97bf-7bdcbacddee3/P8uCCBi3YR.lottie"
              loop
              autoplay
              className="card-image"
            />
          </div>
          <div className="card-stat">
            <p className="pound-sign"> £</p>
            <AnimatedNumbers
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyGenerated;
