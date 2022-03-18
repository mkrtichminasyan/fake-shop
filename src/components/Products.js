import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
    console.log(useParams());
    return (
        <div>
            products
        </div>
    );
};

export default Products;