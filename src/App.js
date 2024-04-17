import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieListComp from "./component/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Wishlist from "./component/wishlist";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="" element={<Layout />}>
          <Route path="/home" element={<MovieListComp />} />
          <Route path="/watchlist" element={<Wishlist />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
