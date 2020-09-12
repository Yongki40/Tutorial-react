import React from 'react';
import './app.css';

function Product(props) {
    return(
        <div className="products">
            <h3>Nama: {props.name}</h3>
            <img src={props.imgUrl} alt="" style={{ width:"300px" }}/>
            <p>Desc: {props.desc}</p>
        </div>
    );
}

export default Product