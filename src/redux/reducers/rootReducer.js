
import { combineReducers } from 'redux';
import addProduct from './addProductReducer';
import products from './allProductReducer';
import deleteProduct from './deleteProductReducer'
import editProduct from './editProductReducer'

export default combineReducers({
  addProduct,
  products,
  deleteProduct,
  editProduct
});