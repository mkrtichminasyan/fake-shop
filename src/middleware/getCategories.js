import { getCategoryAction } from '../redux/action'
import categoryAPI from '../shopProductAPI/categoryAPI'


export const getCategories = () => {
    return (dispatch, getState) => {
        return categoryAPI().then((category) => {
            dispatch(getCategoryAction(category))
        })
    }
}


