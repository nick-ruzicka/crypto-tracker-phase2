import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  console.log("hello");
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={CoinSummaryPage} />
      </BrowserRouter>
    </div>
  );
}
