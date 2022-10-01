import React from "react";
import ReactTyped from "react-typed";
import "./assets/js/connectingDots"

const Home = () => {
  return (
    <>
      <article id="home">
        <canvas id="connect" className="connecting-dots"></canvas>
        <div className="container">
          <div className="article">
            <h1 className="before-name"> I Am</h1>
            <h1 className="name">Md Maraj Rashid.</h1>
            <div className="after-name">
              <div className="side-line"></div>
              <p className="side-line-text">
                <ReactTyped
                  loop
                  typeSpeed={50}
                  backSpeed={20}
                  strings={[
                    "A Full Stack Web Developer.",
                    "A Laravel React Developer.",
                    "A Freelancer.",
                  ]}
                  smartBackspace
                  backDelay={2500}
                  fadeOut={false}
                  loopCount={0}
                  cursorChar="|"
                />
              </p>
            </div>
            <div className="quotes">
              <h1>Ready to work on the next big project for your business.</h1>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
