import { FETCH_FEATURED} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_FEATURED:

    console.log(action.payload.data)
    return [action.payload.data.results];
  }
  return state;
}
