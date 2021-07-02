
  
  export const transactionModal = message => ({
    type: 'OPEN_TRANSACTION_MODAL',
    message,
  });
  
  export const detailsModal = data => ({
    type: 'OPEN_DETAILS_MODAL',
    data,
  });
  
  export const updateMoviesAction = data => ({
    type: 'GET_MOVIES',
    data,
  });
  
  export const bookMovieAction = id => ({
    type: 'BOOK_MOVIE',
    id,
  });
  
  
  