import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Page } from "./components/Page";
import { CardInformation } from "./components/CardInformation";
import { path } from "./constants";

const App = () => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((response) => setCards(response));
  }, [path]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page cards={cards} />
        </Route>
        <Route path="/card_info/:id">
          <CardInformation cards={cards} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
