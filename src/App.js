import FormAddProduct from "./FormAddProduct";
import FormEditProduct from "./FormEditProduct";
import TableAllProduct from "./TableAllProduct";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TableAllProduct />
          <FormAddProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
