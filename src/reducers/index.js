import { combineReducers } from 'redux';
import ProductReducer from './reducer_products';
import SelectedProductReducer from './reducer_selected_product';
import FeaturedProductReducer from './reducer_featured';

const rootReducer = combineReducers({
  products: ProductReducer,
  selectedProduct: SelectedProductReducer,
  featuredProducts: FeaturedProductReducer
});

export default rootReducer;
