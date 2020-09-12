import React from 'react';
import Product from './Product';
import ProductsData from './ProductsData';

function AppProduct() {
    const productsData = ProductsData.map((data)=> {
        return (
            <Product 
                key={data.id}
                name={data.name}
                imgUrl={data.imgUrl}
                desc={data.desc}
                />
        );
    })
    return(
        <React.Fragment>
            {productsData}
        </React.Fragment>
    );
}

export default AppProduct;
