import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Projects = {
  projects: [
    {
      image: '/assets/images/projects/projeto-10.png',
      techs: ['TypeScript', 'React', 'Redux', 'Styled-Components'],
      description:
        'Estou desenvolvendo uma réplica do layout do Spotify, utilizando a API oficial para integrar funcionalidades dinâmicas. Atualmente, já finalizei a estrutura básica do layout, incluindo os principais componentes visuais, e agora estou focado em implementar a interação com a API para exibir playlists, álbuns, artistas e faixas de forma dinâmica. Meu objetivo é criar uma interface funcional e esteticamente próxima do original, aproveitando recursos modernos de estilização e interatividade.',
      title: 'Layout Spoty',
      links: {
        repository: 'https://github.com/MVWerly/spotify_clone/tree/main',
        site: 'https://spotify-clone-eight-topaz-58.vercel.app/'
      },
      isOpen: false,
      id: 1
    },
    {
      image: '/assets/images/projects/projeto-9.png',
      techs: ['TypeScript', 'React', 'Redux', 'Styled-Components'],
      description:
        'Um jogo da memória desenvolvido com React-Redux é uma aplicação dinâmica onde os usuários combinam pares de cartas idênticas. A lógica do jogo é gerenciada utilizando estados globais do Redux, garantindo uma experiência fluida e organizada. ',
      title: 'Jogo da memória',
      links: {
        repository: 'https://github.com/MVWerly/memory_game/tree/main',
        site: 'https://memory-game-nine-chi.vercel.app/'
      },
      isOpen: false,
      id: 2
    },
    {
      image: '/assets/images/projects/projeto-8.png',
      techs: ['TypeScript', 'React', 'Redux', 'Styled-Components'],
      description:
        'Projeto realizado como parte da conclusão do módulo de Frontend da EBAC. Recebi um layout criado no Figma com o objetivo de reproduzi-lo fielmente. O desenvolvimento inclui a integração com uma API para carregar e exibir os elementos na interface. Além disso, há a funcionalidade de envio dos itens adicionados ao carrinho como resposta, garantindo uma interação completa entre o usuário e o sistema.',
      title: 'EFOOD',
      links: {
        repository: 'https://github.com/MVWerly/efood/tree/main',
        site: 'https://efood-rho-six.vercel.app/'
      },
      isOpen: false,
      id: 3
    },
    {
      image: '/assets/images/projects/projeto-7.png',
      techs: ['React', 'Redux', 'Styled-Components'],
      description:
        'Lista de contatos simples, com funções de adicionar, editar e excluir contatos. Foi utilizado o Redux para manipular o estado da lista.',
      title: 'Lista de contatos',
      links: {
        repository: 'https://github.com/MVWerly',
        site: 'https://contact-list-react-redux-topaz.vercel.app/'
      },
      isOpen: false,
      id: 4
    },
    {
      image: '/assets/images/projects/projeto-6.png',
      techs: ['React', 'JavaScript', 'CSS', 'HMTL'],
      description:
        'Um projeto de calculadora de IMC em React é uma aplicação que calcula o Índice de Massa Corporal com base no peso e na altura fornecidos pelo usuário. Utiliza uma interface simples e interativa, implementa a fórmula do IMC e apresenta categorias de classificação conforme os resultados, tudo de forma dinâmica e moderna. É ideal para praticar conceitos de React, como gerenciamento de estado e eventos.',
      title: 'Calculadora IMC',
      links: {
        repository: 'https://github.com/MVWerly/calculadora_imc',
        site: 'https://calculadora-imc-sigma-five.vercel.app/'
      },
      isOpen: false,
      id: 5
    },
    {
      image: '/assets/images/projects/projeto-5.png',
      techs: ['JavaScript', 'HTML', 'SASS'],
      description:
        'Uma landing page desenvolvida para direcionar o visitante a realizar uma ação específica. Frequentemente utilizada em campanhas digitais, ela é projetada para ser objetiva e eficaz na conversão de visitantes em leads, clientes ou participantes de uma ação definida.',
      title: 'Landing Page',
      links: {
        repository: 'https://github.com/MVWerly/ebac_tech_talks/tree/main',
        site: 'https://ebac-tech-talks-two-psi.vercel.app/'
      },
      isOpen: false,
      id: 6
    },
    {
      image: '/assets/images/projects/projeto-4.png',
      techs: ['JavaScript', 'HTML', 'SASS'],
      description:
        'Uma landing page desenvolvida com o objetivo de direcionar o visitante a realizar uma ação específica. Frequentemente utilizada em campanhas digitais, ela é projetada para ser clara e eficiente na conversão de visitantes em leads, clientes ou participantes de uma ação definida',
      title: 'Landing Page',
      links: {
        repository: 'https://github.com/MVWerly/pagina_filme/tree/main',
        site: 'https://batmanocavaleirodastrevas.vercel.app/'
      },
      isOpen: false,
      id: 7
    },
    {
      image: '/assets/images/projects/projeto-3.png',
      techs: ['JavaScript', 'HTML', 'SASS'],
      description:
        'Página criada com o objetivo de replicar a página inicial do Disney+, utilizando a metodologia BEM para garantir códigos mais organizados, limpos e concisos.',
      title: 'Layout Disney+',
      links: {
        repository: 'https://github.com/MVWerly/clone_disneyplus/tree/main',
        site: 'https://clone-disneyplus-pied-seven.vercel.app/'
      },
      isOpen: false,
      id: 8
    },
    {
      image: '/assets/images/projects/projeto-2.png',
      techs: ['HTML', 'CSS'],
      description:
        'Página criada para apresentar uma marca e seus produtos, desenvolvida exclusivamente com CSS e HTML. O layout é responsivo e conta com abas para organizar os produtos por categorias.',
      title: 'Página apresentação',
      links: {
        repository: 'https://github.com/MVWerly/landing_page/tree/main',
        site: 'https://landing-page-taupe-kappa.vercel.app/'
      },
      isOpen: false,
      id: 9
    },
    {
      image: '/assets/images/projects/projeto-1.png',
      techs: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Página criada para apresentar um jogo, com um layout responsivo que inclui carrosséis, modais e uma interface de fácil interação com o usuário.',
      title: 'Página de apresentação',
      links: {
        repository:
          'https://github.com/MVWerly/pagina-league-og-legends/tree/main',
        site: 'https://pagina-league-og-legends.vercel.app/'
      },
      isOpen: false,
      id: 10
    }
  ]
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<Project>) => {
      const project = state.projects.find(
        (item) => item.id === action.payload.id
      )
      if (project) {
        project.isOpen = !project.isOpen
      }
    }
  }
})

export const { toggle } = projectsSlice.actions

export default projectsSlice.reducer
