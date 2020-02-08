import { combineReducers } from  'redux';
import postsReducer from './postsRducer';

export default combineReducers({
   posts: postsReducer
});