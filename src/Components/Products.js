import React, {Component} from 'react';
import formatCurrency from "../util";

class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {
                        this.props.products.map((product)=>{
                                return(
                                    <li key={product._id}>
                                        <div className="product">
                                            <a href={product._id}>
                                                <img src={product.image} alt={product.title}/>
                                                <p>{product.title}</p>
                                            </a>
                                            <div className="product-price">
                                                <div>{formatCurrency(product.price)}</div>
                                                <div className="button primary">Add to card</div>
                                            </div>
                                        </div>
                                    </li>

                                )

                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Products;