import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import { SnackOrBoozeApi } from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddItemForm from './AddItemForm';

function App() {
  // instantiate state for snacks, drinks, and if page is loading
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // populate snacks and drinks from db.json file
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
      // console.log(snacks);
    }
    getSnacks();

    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
      // console.log(drinks);
    }
    getDrinks();
    // anytime snacks/drinks changes (item added), refresh call to API
  }, [snacks, drinks]);

  // is page loading? Spinner
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  // Render BrowserRouter with NavBar, and Switch holding all app routes
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <main>
          <Switch>

            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>

            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>

            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>

            <Route path="/newitem">
              <AddItemForm />
            </Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.              
                <Link to={"/"}>Go Home here</Link></p>
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
