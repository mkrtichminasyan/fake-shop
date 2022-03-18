import { getProductAction } from '../redux/action'
import productAPI from '../shopProductAPI/productAPI'


export const getProducts = (filterCategory) => {
    return (dispatch, getState) => {
        return productAPI(filterCategory).then((product) => {
            dispatch(getProductAction(product))
        })
    }
}