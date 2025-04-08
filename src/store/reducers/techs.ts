import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Techs = {
  techs: [
    {
      name: 'HTML 5',
      image: '/assets/images/techs/html.png',
      description:
        'O HTML5 é a versão mais recente do HTML (HyperText Markup Language), a linguagem padrão utilizada para criar a estrutura e o conteúdo de páginas web. Introduzido oficialmente em 2014, ele trouxe diversas inovações que revolucionaram o desenvolvimento web, tornando-o mais moderno, acessível e dinâmico.'
    },
    {
      name: 'CSS 3',
      image: '/assets/images/techs/css.png',
      description:
        'O CSS3 (Cascading Style Sheets 3) é a terceira versão da linguagem CSS, utilizada para estilizar e definir o layout de páginas web. Lançado como uma evolução do CSS2, o CSS3 trouxe diversas novidades que tornaram o design web mais moderno, dinâmico e acessível, facilitando a criação de interfaces responsivas e interativas.'
    },
    {
      name: 'JavaScript',
      image: '/assets/images/techs/javascript.png',
      description:
        'JavaScript é uma linguagem de programação amplamente utilizada no desenvolvimento web para adicionar interatividade e funcionalidades dinâmicas a páginas e aplicações. Criada em 1995, ela rapidamente se tornou uma das principais tecnologias da web, ao lado de HTML e CSS, sendo executada diretamente nos navegadores dos usuários.'
    },
    {
      name: 'React',
      image: '/assets/images/techs/react.png',
      description:
        'O React é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook, amplamente utilizada para construir interfaces de usuário (UIs) de forma eficiente e reativa. Ele foi criado em 2013 e rapidamente se tornou uma das tecnologias mais populares no desenvolvimento front-end devido à sua flexibilidade e desempenho'
    },
    {
      name: 'Redux',
      image: '/assets/images/techs/redux.png',
      description:
        'Redux é uma biblioteca JavaScript de gerenciamento de estado utilizada principalmente em aplicações front-end. Criada por Dan Abramov e Andrew Clark em 2015, ela se tornou popular pela sua abordagem centralizada e previsível para gerenciar estados em aplicações, especialmente aquelas desenvolvidas com frameworks como React.'
    },
    {
      name: 'TypeScript',
      image: '/assets/images/techs/typescript.png',
      description:
        'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que funciona como um superset do JavaScript. Isso significa que ele adiciona novos recursos ao JavaScript, como tipagem estática e melhor suporte ao desenvolvimento em grande escala, enquanto mantém total compatibilidade com o JavaScript.'
    },
    {
      name: 'Styled-Components',
      image: '/assets/images/techs/css-in-js.png',
      description:
        'Styled-Components é uma biblioteca JavaScript para estilização de componentes em aplicações React. Ela utiliza a abordagem CSS-in-JS, permitindo que os estilos sejam escritos diretamente dentro dos componentes, de forma dinâmica e com escopo local. Isso significa que os estilos são encapsulados e não influenciam outros elementos fora do componente, resolvendo problemas comuns de conflitos de estilos.'
    },
    {
      name: 'Bootstrap',
      image: '/assets/images/techs/bootstrap.png',
      description:
        'Bootstrap é um framework front-end de código aberto que facilita a criação de sites e aplicações web responsivas e modernas. Desenvolvido inicialmente pelo Twitter, ele se tornou uma das ferramentas mais populares para desenvolvedores que desejam construir interfaces atraentes e funcionais de maneira rápida e eficiente'
    },
    {
      name: 'Cypress',
      image: '/assets/images/techs/cypress.png',
      description:
        'Cypress é uma ferramenta de teste end-to-end baseada em JavaScript, amplamente utilizada para verificar e automatizar o comportamento de aplicações web. Criada para desenvolvedores e testadores, ela proporciona uma abordagem moderna para a automação de testes, simplificando o processo e oferecendo uma experiência interativa.'
    },
    {
      name: 'Gulp',
      image: '/assets/images/techs/gulp.png',
      description:
        'Gulp é um task runner ou automador de tarefas em JavaScript utilizado principalmente no desenvolvimento front-end. Ele ajuda a automatizar tarefas repetitivas e complexas, como compilação de CSS, minificação de arquivos, otimização de imagens e muito mais, tornando o fluxo de trabalho mais rápido e eficiente'
    },
    {
      name: 'jQuery',
      image: '/assets/images/techs/jquery.png',
      description:
        'jQuery é uma biblioteca JavaScript leve e de fácil utilização, criada para simplificar a manipulação de elementos HTML, eventos, animações e interações com o DOM (Document Object Model). Lançada em 2006 por John Resig, ela se tornou uma das ferramentas mais populares no desenvolvimento web por sua capacidade de tornar o JavaScript mais acessível.'
    },
    {
      name: 'Node.js',
      image: '/assets/images/techs/node.png',
      description:
        'Node.js é um ambiente de execução JavaScript de código aberto e multiplataforma, criado por Ryan Dahl em 2009. Ele permite que desenvolvedores utilizem JavaScript não apenas no front-end, mas também no back-end, possibilitando a criação de servidores e aplicações escaláveis. Node.js é construído sobre o motor V8 do Google Chrome, que é responsável por interpretar o JavaScript de maneira rápida e eficiente.'
    },
    {
      name: 'SASS',
      image: '/assets/images/techs/sass.png',
      description:
        'Sass (Syntactically Awesome Stylesheets) é um pré-processador CSS que adiciona funcionalidades avançadas à linguagem CSS, permitindo aos desenvolvedores escreverem estilos mais dinâmicos, organizados e reutilizáveis. Criado em 2006, o Sass é amplamente utilizado para melhorar a produtividade e manter a consistência em projetos de desenvolvimento front-end.'
    },
    {
      name: 'Vue.js',
      image: '/assets/images/techs/vuejs.png',
      description:
        'Vue.js é um framework JavaScript progressivo e de código aberto usado para construir interfaces de usuário (UIs) e aplicativos de página única (SPAs). Criado por Evan You em 2014, o Vue se destaca por sua simplicidade, flexibilidade e capacidade de adaptação, tornando-o uma escolha popular entre desenvolvedores, especialmente aqueles que valorizam uma curva de aprendizado amigável.'
    }
  ],
  selectedTech: '',
  selected: {
    name: '',
    image: '',
    description: ''
  }
}

const techsSlice = createSlice({
  name: 'techs',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<string>) => {
      state.selectedTech = action.payload
    },
    filterTechs: (state) => {
      const tech = state.techs.find((tech) => tech.name === state.selectedTech)
      if (tech) {
        state.selected = tech
      }
    }
  }
})

export const { select, filterTechs } = techsSlice.actions

export default techsSlice.reducer
