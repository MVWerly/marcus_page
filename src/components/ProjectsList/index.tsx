import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import * as S from './styles'
import { toggle } from '../../store/reducers/projects'

const ProjectList = () => {
  const { projects } = useSelector((state: RootReducer) => state.projects)
  const dispatch = useDispatch()

  function toggleProject(project: Project) {
    dispatch(toggle(project))
  }

  return (
    <S.Container>
      {projects.map((project, index) => (
        <S.Card key={index}>
          <S.ImageContainer>
            <img src={project.image} />
            <div>
              {project.techs.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <button
              className={project.isOpen ? 'rotate' : ''}
              onClick={() => toggleProject(project)}
            >
              <i className="bi bi-plus-circle-fill"></i>
            </button>
          </S.ImageContainer>
          <S.DescriptionContainer $toggle={project.isOpen}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a target="_blank" href={project.links.site} rel="noreferrer">
              Acessar
            </a>
            <a target="_blank" href={project.links.repository} rel="noreferrer">
              Repositório
            </a>
          </S.DescriptionContainer>
        </S.Card>
      ))}
    </S.Container>
  )
}

export default ProjectList
