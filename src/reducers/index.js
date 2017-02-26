import { combineReducers } from 'redux';
import ProductReducer from './reducer_products';
import SelectedProductReducer from './reducer_selected_product';

const rootReducer = combineReducers({
  products: ProductReducer,
  selectedProduct: SelectedProductReducer
});

export default rootReducer;
