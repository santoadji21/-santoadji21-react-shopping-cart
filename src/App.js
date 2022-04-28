import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Cart from "./components/cart";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />

        <div className="content-container">
          <Routes>
            <Route index element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
