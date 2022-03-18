import axios from "axios";


const categoryAPI = async () => {
    const categories = await axios.get(`https://fakestoreapi.com/products/categories`)
    return categories.data
};

export default categoryAPI;