import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    /// similar: return state.concat([action.payload.data]);
    console.log(action.payload.data)
    return [action.payload.data.results, ...state];
  }
  return state;
}


// redux promise looks at payload property
// if payload is promise, stops and waits
// when it finishes, it dispatches new action
// but with payload of resolved request
// unwraps promise
// reduxpromise unwraps axios..
