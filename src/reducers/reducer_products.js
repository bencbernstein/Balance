import { FETCH_ARTWORK, FETCH_HANDMADE, FETCH_CLOTHING, FETCH_BOOKS, FETCH_HOMEWARE} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_ARTWORK: case FETCH_HANDMADE: case FETCH_CLOTHING: case FETCH_BOOKS: case FETCH_HOMEWARE:
    /// similar: return state.concat([action.payload.data]);
    console.log(action.payload.data)
    return [action.payload.data.results];
    //return [action.payload.data.results, ...state];
  }
  return state;
}


// redux promise looks at payload property
// if payload is promise, stops and waits
// when it finishes, it dispatches new action
// but with payload of resolved request
// unwraps promise
// reduxpromise unwraps axios..
