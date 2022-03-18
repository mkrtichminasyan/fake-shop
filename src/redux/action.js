export const getCategoryAction = (category) => {
    return {
        type: "GET_CATEGORY",
        payload: category
    }
}

export const getProductAction = (products) => {
    return {
        type: "GET_PRODUCTS",
        payload: products
    }
}