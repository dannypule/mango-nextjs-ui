const Bio = () => (
  <div>
    <div className="bio">
      <img
        src="/static/images/danny_pule.jpg"
        alt="Danny Pule - Javascript Engineer"
      />
      <h2>
        <span>Danny Pule</span>
      </h2>
      <h5>Javascript Engineer based in South West London, UK</h5>
    </div>
    <div className="site-section how-i-do">
      <div className="section-inner">
        <h1>~ About ~</h1>
        <p>
          When I'm not building something or learning about some new Web
          technology you can find me scrolling through Dribbble.com appreciating
          the designs contained therein.
        </p>
      </div>
    </div>
    <div className="site-section skillz">
      <div className="section-inner">
        <div>
          <h1>~ Frontend Skills ~</h1>
          <p>React, Redux, Webpack,</p>
          <p>HTML, CSS,</p>
          <p>Angular 2+, Typescript,</p>
          <p>Rx/JS, Modern Javascript</p>
          <br />
          <h1>~ Backend Skills ~</h1>
          <p>Node.js, Postgres,</p>
          <p>Heroku, Docker</p>
        </div>
      </div>
    </div>
  </div>
)

export default Bio
