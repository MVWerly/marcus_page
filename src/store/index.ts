import { configureStore } from '@reduxjs/toolkit'

import techsReducer from './reducers/techs'
import projectsReducer from './reducers/projects'

export const store = configureStore({
  reducer: {
    techs: techsReducer,
    projects: projectsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
