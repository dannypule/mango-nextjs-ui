import projects from '../../js/projects'

const Projects = () => (
  <div className="projects-section grid">
    <div className="col-12">
      <h1>~ Projects ~</h1>
    </div>

    {projects.map((project, key) => (
      <div
        className={`projects-section-item col-6_sm-12 ${project.className}`}
        key={key}
      >
        <h3>{project.title}</h3>
        <img
          className={project.maxWidthForImage ? 'max-width' : ''}
          src={project.imageUrl}
          alt={project.title}
        />
        <div className="projects-section-item-inner">
          <h5>{project.summary}</h5>
          <p className="project-overview">{project.contribution}</p>
          <p className="skills-used">
            <span className="bold-text">Skills used:</span> {project.skillsUsed}
          </p>
        </div>
      </div>
    ))}
  </div>
)

export default Projects
