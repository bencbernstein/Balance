import { FETCH_SELECTED_PRODUCT} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_SELECTED_PRODUCT:

    console.log( action.payload.data.result)
    return [action.payload.data.result];
  }
  return state;
}
