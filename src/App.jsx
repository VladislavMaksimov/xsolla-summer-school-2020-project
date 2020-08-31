import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Page } from "./components/Page";
import { CardInformation } from "./components/CardInformation";
import { path } from "./constants";
import {CardsContext} from "./context";

const App = () => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((response) => setCards(response));
  }, [path]);

  return (
      <CardsContext.Provider value={{ cards, setCards }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Page />
            </Route>
            <Route path="/card_info/:id">
              <CardInformation/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CardsContext.Provider>
  );
};

export default hot(App);
