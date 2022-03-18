const initialState = {
    category: [],
    product: []    
}

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORY":
            return {
                ...state,
                category: [...action.payload]
            }

        case "GET_PRODUCTS":
            return {
                ...state,
                product: [...action.payload]
            }

        default:
            return state
    }
};

export default reduser;