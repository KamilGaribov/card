import { useLayoutEffect, useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/index";
import { Card, CardIndex, CardId } from "./pages/card/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Transaction } from "./pages/transaction";
import Breadcrumb from "./components/breadcrumb";
import { Provider } from "react-redux";
import store from "./redux/store";
import CardID from "./pages/card/id";
import TransactionID from "./pages/transaction/id";
import { useLocation, useNavigate } from "react-router-dom";

export const routes = [
  { path: "/", name: "Home", element: <Home /> },
  { path: "card/*", name: "Cards", element: <Card /> },
  { path: "card/:id", name: "Card ID", element: <CardID /> },
  { path: "transaction/*", name: "Transactions", element: <Transaction /> },
  {
    path: "transaction/:id",
    name: "Transaction ID",
    element: <TransactionID />,
  },
];

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Breadcrumb />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

export const initialTheme = {
  light: {
    name: "light",
    background: "white",
    background2: "wheat",
    color: "#2D2424",
    button: {
      background: "#2D2424",
      color: "white",
    },
  },
  dark: {
    name: "dark",
    background: "#2D2424",
    background2: "#171010",
    color: "white",
    button: {
      background: "white",
      color: "#2D2424",
    },
  },
};
