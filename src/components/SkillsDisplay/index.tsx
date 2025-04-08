import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

import { RootReducer } from '../../store'
import { filterTechs, select } from '../../store/reducers/techs'

import * as S from './styles'

const SkillsDisplay = () => {
  const dispatch = useDispatch()
  const { techs, selectedTech, selected } = useSelector(
    (state: RootReducer) => state.techs
  )
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    dispatch(filterTechs())
  }, [dispatch, selectedTech])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        dispatch(select(''))
      }
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [dispatch])

  function selectTech(name: string) {
    dispatch(select(name))
  }

  return (
    <S.Container>
      <div ref={containerRef}>
        {techs.map((tech, index) => (
          <img
            key={index}
            src={tech.image}
            onClick={() => selectTech(tech.name)}
          />
        ))}
      </div>
      <S.DescriptionContainer>
        {selectedTech ? (
          <>
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>
          </>
        ) : (
          <>
            <h3>Tecnologias de Programação</h3>
            <p>
              As tecnologias de programação abrangem as ferramentas, linguagens,
              frameworks, bibliotecas e metodologias utilizadas para criar,
              desenvolver e implementar softwares e sistemas computacionais.
              Elas fornecem os recursos necessários para que desenvolvedores
              resolvam problemas, automatizem processos, criem aplicações
              inovadoras e transformem ideias em soluções digitais.
            </p>
          </>
        )}
      </S.DescriptionContainer>
    </S.Container>
  )
}

export default SkillsDisplay
