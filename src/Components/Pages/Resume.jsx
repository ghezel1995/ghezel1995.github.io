export default function Resume() {
  return (
    <>
      <div className="resume row justify-content-center">
        <div className="f-sect col-12 col-lg-6">
          <h1 className="mb-5">Education</h1>
          <div className="education row align-items-center mb-5">
            <div className="years col">
              <div className="year">
                <h4>2021</h4>
                <h5>Maedeh University</h5>
              </div>
              <div className="year">
                <h4>2017</h4>
                <h5>Maedeh University</h5>
              </div>
            </div>
            <div className="vl col"></div>
            <div className="description col">
              <div className="desc">
                <h3>Software Engineering</h3>
              </div>
              <div className="desc">
                <h3>Software Associate license</h3>
              </div>
            </div>
          </div>
          <h1 className="mb-5">Experience</h1>
          <div className="experience  row align-items-center">
            <div className="years col">
              <div className="year">
                <h4>2022 - Current</h4>
                <h5>Freelance</h5>
              </div>
              <div className="year">
                <h4>2021</h4>
                <h5>ITRC</h5>
              </div>
            </div>
            <div className="vl col"></div>
            <div className="description col">
              <div className="desc">
                <h3>Front-End Developer</h3>
              </div>
              <div className="desc">
                <h3>Junior Software Engineer</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-sect col-12 col-lg-6">
          <div className="coding-skills">
            <div className="progress-container">
              <div className="my-label">
                <h3>HTML/CSS</h3>
                <h5>95%</h5>
              </div>
              <div className="progress">
                <div className="inside"></div>
              </div>
            </div>
            <div className="progress-container">
              <div className="my-label">
                <h3>JavaScript</h3>
                <h5>70%</h5>
              </div>
              <div className="progress">
                <div className="inside-70"></div>
              </div>
            </div>
            <div className="progress-container">
              <div className="my-label">
                <h3>React</h3>
                <h5>60%</h5>
              </div>
              <div className="progress">
                <div className="inside-50"></div>
              </div>
            </div>
            <div className="progress-container">
              <div className="my-label">
                <h3>Responsive WebDesign</h3>
                <h5>95%</h5>
              </div>
              <div className="progress">
                <div className="inside"></div>
              </div>
            </div>
            <div className="progress-container">
              <div className="my-label">
                <h3>Bootstrap</h3>
                <h5>70%</h5>
              </div>
              <div className="progress">
                <div className="inside-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
