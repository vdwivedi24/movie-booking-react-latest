import { combineReducers } from "redux";

const sagaMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "MOVIES_FETCH_SUCCEEDED":
      return action.movies;
    case "MOVIES_FETCH_FAILED":
      return action.message;
    default:
      return state;
  }
};

const sagaUpcomingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "UPCOMINGMOVIES_FETCH_SUCCEEDED":
      return action.movies;
    case "UPCOMINGMOVIES_FETCH_FAILED":
      return action.message;
    default:
      return state;
  }
};

const sagaEvents = (state = [], action) => {
  switch (action.type) {
    case "EVENTS_FETCH_SUCCEEDED":
      return action.events;
    case "EVENTS_FETCH_FAILED":
      return action.message;
    default:
      return state;
  }
};

const bookedmoviereducer = (state = [], action) => {
  switch (action.type) {
    case "BOOKED_MOVIE":
      return action.data;
    default:
      return state;
  }
};


const detailpagename = (state = [], action) => {
  switch (action.type) {
    case "MOVIE_DETAIL":
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  sagaUpcomingMoviesReducer,
  sagaEvents,
  sagaMoviesReducer,
  bookedmoviereducer,
  detailpagename
});
