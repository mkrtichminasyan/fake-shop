import axios from "axios";


const productAPI = async (filterCategory) => {
    const url = `https://fakestoreapi.com/products/category/${filterCategory}`
    const products = await axios.get(filterCategory?url:`https://fakestoreapi.com/products` )
    return products.data
};

export default productAPI;