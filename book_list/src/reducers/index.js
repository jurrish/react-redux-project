//a reducer is a piece of functionality that returns an application's state
//these reducers change the VALUE in the key/value pairs.
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //we map state here
  books: BooksReducer //gives us the mapping to our titles
});

export default rootReducer;
