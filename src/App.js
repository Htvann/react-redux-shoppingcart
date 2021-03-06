import React, {Component} from 'react';
import data from "./data.json"
import Products from "./Components/Products";
import Filter from "./Components/Filter";
import products from "./Components/Products";

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: ""
        }
    }

    filterProducts = (event) => {
        if (event.target.value === "") {
            this.setState({
                size: event.target.value,
                product: data.products
            })
        } else {
            this.setState({
                size: event.target.value,
                products: data.products.filter(
                    (product) => product.availableSizes.indexOf(event.target.value) > 0
                )
            })
        }
    }
    sortProducts = (event) => {
        const sort = event.target.value
        this.setState((state) => ({
            sort: sort,
            products: this.state.products.slice().sort((a, b) => (
                sort === "lowest" ?
                    ((a.price < b.price) ? 1 : -1) :
                    sort === "highest" ?
                        ((a.price > b.price) ? 1 : -1) :
                        ((a._id > b._id) ? 1 : -1)
            ))
        }))
    }


    render() {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">shop</a>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <Filter
                                count={this.state.products.length}
                                size={this.state.size}
                                sort={this.state.sort}
                                filterProducts={this.filterProducts}
                                sortProducts={this.sortProducts}
                            />
                            <Products products={this.state.products}/>
                        </div>
                        <div className="sidebar">Cart items</div>
                    </div>
                </main>
                <footer>Goodbye</footer>
            </div>
        );
    }
}

export default App;