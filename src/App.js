import React, {Component} from 'react';
import data from "./data.json"
import Products from "./Components/Products";

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: ""
        }
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