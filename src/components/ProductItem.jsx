import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from "../context/AppContext";

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);
	// const [cart, setCart] = useState([]);
    // const [cart, setCart] = useState('');

    const handleClick = item => {
        addToCart(item)
    }

    return (
        <div className="ProductItem">
			<img src={product.images[0]} alt={product.title}/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src='https://ss623.liverpool.com.mx/xl/1100941160.jpg' alt="" />
				</figure>

			</div>
		</div>
    )
}

export default ProductItem
