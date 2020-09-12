import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import PostForm from "./components/PostForm";
import "./styles/reset.css";
import "./styles/App.scss";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/update" component={PostForm} />
        <Route path="/create" component={PostForm} />
        <Route path="/" exact component={ListPage} />
      </Switch>
    </div>
  );
}
