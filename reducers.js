import { INCREASE } from './constants'

export const counter = (state = { count: 0 }, action) => {
  const count = state.count
  switch (action.type) {
    case INCREASE:
      return { count: count + 1 }
    default:
      return state
  }
}