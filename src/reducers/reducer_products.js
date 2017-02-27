import { FETCH_CATEGORY} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_CATEGORY:
    /// similar: return state.concat([action.payload.data]);
    console.log(action.payload.data.results)
    return [action.payload.data.results];
    //return [action.payload.data.results, ...state];
  }
  return state;
}
