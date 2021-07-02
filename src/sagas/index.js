import { put,  takeLatest } from 'redux-saga/effects';
import axios from "axios";


const url_latest = 'http://localhost:3002/movies';
const url_upcoming = 'http://localhost:3002/upcomingmovies';
const url_events = 'http://localhost:3002/events';

function* fetchMovies(action) {
  try {
    const movies = yield axios.get(url_latest).then(response => response.data);
    yield put({type: 'MOVIES_FETCH_SUCCEEDED', movies});
  } catch (e) {
    yield put({type: 'MOVIES_FETCH_FAILED', message: e.message});
  }
}

function* fetchUpcomimgMovies(action) {
    try {
      const movies = yield axios.get(url_upcoming).then(response => response.data);
      yield put({type: 'UPCOMINGMOVIES_FETCH_SUCCEEDED', movies});
    } catch (e) {
      yield put({type: 'UPCOMINGMOVIES_FETCH_FAILED', message: e.message});
    }
  }

function* fetchEvents(action) {
  try {
    const events = yield axios.get(url_events).then(response => response.data);
    yield put({type: 'EVENTS_FETCH_SUCCEEDED', events});
  } catch (e) {
    yield put({type: 'EVENTS_FETCH_FAILED', message: e.message});
  }
}
  
function* mySaga() {
  yield takeLatest('MOVIES_FETCH_REQUESTED', fetchMovies);
  yield takeLatest('UPCOMINGMOVIES_FETCH_REQUESTED', fetchUpcomimgMovies);
  yield takeLatest('FETCH_EVENTS', fetchEvents);
}

export default mySaga;