declare type Tech = {
  name: string
  description: string
  image: string
}

declare type Techs = {
  techs: Tech[]
  selectedTech: string
  selected: Tech
}

declare type Project = {
  image: string
  techs: string[]
  title: string
  description: string
  links: {
    site: string
    repository: string
  }
  isOpen: boolean
  id: number
}

declare type Projects = {
  projects: Project[]
}
