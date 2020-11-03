import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ListCompositeProducts from './modules/composite-product/list';
import EditCompositeProducts from './modules/composite-product/edit';
import AddCompositeProducts from './modules/composite-product/add';
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">List composite products</Link></li>
          <li><Link to="/composite-product/add">Add new composite products</Link></li>
        </ul>

        <Switch>
          <Route path="/composite-product/add">
            <AddCompositeProducts />
          </Route>
          <Route path="/composite-product/:id">
            <EditCompositeProducts />
          </Route>
          <Route path="/">
            <ListCompositeProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
