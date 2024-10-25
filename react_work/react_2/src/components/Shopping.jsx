import React from "react";
import Products from './Products.jsx'
const Shoppinglist = (props)=>{
    const products = [
        {
            imgURL:'https://www.aroound.com/storage/2022/02/Kawasaki-H2r.jpg',
            name: 'H2R',
            price:860000
        },
        {
            imgURL:'https://tse3.mm.bing.net/th?id=OIP.Cs4QZ_1wlrtYw1CnSTH7zAHaEK&pid=Api&P=0&h=2203',
            name: 'Ipad Pro Max',
            price:120000
        },
        {
            imgURL:'https://tse4.mm.bing.net/th?id=OIP.B4ZpRhAkszS_lq1SDFfA9gHaHa&pid=Api&P=0&h=220',
            name: 'Headphone Sony 123',
            price:8000
        },
    ]
    return(
        <section>
            {products.map((product)=>{
                return <Products  name = {product.name}
                imgURL = {product.imgURL}
                price = {product.price}
                />;
            })}
        </section>
    );
}
export default Shoppinglist