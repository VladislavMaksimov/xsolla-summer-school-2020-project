import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from './for-router-example/NavigationBar.jsx';
import ItemList from './for-router-example/ItemList.jsx';
import Item from './for-router-example/Item.jsx';

const About = () => <h2>About</h2>;
const Home = () => <h2>Home</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/items">
          <ItemList />
        </Route>
        <Route path="/items/:id">
          <Item />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
