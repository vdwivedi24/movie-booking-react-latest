import { combineReducers } from 'redux'



const sagaMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'MOVIES_FETCH_SUCCEEDED':
      return action.movies
    case 'MOVIES_FETCH_FAILED':
      return action.message 
    default:
      return state
  }
}

const sagaUpcomingMoviesReducer = (state = [], action) => {
    switch (action.type) {
      case 'UPCOMINGMOVIES_FETCH_SUCCEEDED':
        return action.movies
      case 'UPCOMINGMOVIES_FETCH_FAILED':
        return action.message
      default:
        return state
    }
  }

const sagaEvents = (state = [], action) => {
  switch (action.type) {
    case 'EVENTS_FETCH_SUCCEEDED':
      return action.events
    case 'EVENTS_FETCH_FAILED':
      return action.message
    default:
      return state
  }
}



export default combineReducers({
  sagaUpcomingMoviesReducer,
  sagaEvents,
  sagaMoviesReducer,
})
