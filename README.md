# movie-ticket-booking

A simple movie ticket reservation app with react and redux

### Pre-requirements

- node & npm & yarn installed

### To get started

1. `git clone https://github.com/vdwivedi24/movie-booking-react-latest.git`
2. `cd movieticketbooking`
3. run `npm install` (nodejs packages installation)
4. run json-server using 'json-server --watch ./movies.json --port 3002'

   Note: If you change the port in above command anything from 3002, please change the same in sagas/index.js as well, otherwise URL wouldn't work.

   Above command should give below endpoints:

   http://localhost:3002/carousel
   http://localhost:3002/movies
   http://localhost:3002/upcomingmovies
   http://localhost:3002/events

5. run `npm start` after successfully completing the above steps in another terminal to launch the react app (http://localhost:3000)
6. visit <http://localhost:3000/>

### tests

1. run `yarn test`
