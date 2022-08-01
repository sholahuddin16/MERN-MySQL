import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/AddProduct.js";

import EditProduct from "./components/EditProduct.js";
import ProductItem from "./components/ProductItem.js";
import ProductList from "./components/ProductList.js";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="coluumns">
          <div className="column is-4-dekstop">
            <Switch>
              <Route exact path="/">
                <ProductList />
              </Route>
              <Route path="/add">
                <AddProduct />
              </Route>
              <Route path="/edit/:id">
                <EditProduct />
              </Route>
              <Route path="/item">
                <ProductItem />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;