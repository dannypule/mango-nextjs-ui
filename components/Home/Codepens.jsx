import codepens from '../../js/codepens'

const Projects = () => (
  <div className="codepens-section">
    <div className="codepens-header">
      <h1>~ Codepens ~</h1>
    </div>

    {codepens.map((pen, key) => (
      <div className="codepen-item" key={key}>
        <div className="codepen-item-header">
          <h2>{pen.title}</h2>
          <h5>{pen.subTitle}</h5>
        </div>
        <div className="codepen-item-body">
          <iframe
            height="800"
            scrolling="no"
            title={pen.title}
            src={pen.url}
            frameBorder="no"
            allowFullScreen="true"
          >
            {/* See the Pen
              <a href={`https://codepen.io/danny_pule/pen/${pen.code}`}>
                {pen.title}
              </a>{' '}
              by Danny Pule (
              <a href="https://codepen.io/danny_pule">@danny_pule</a>) on
              <a href="https://codepen.io">CodePen</a>. */}
          </iframe>
        </div>
      </div>
    ))}
  </div>
)

export default Projects
