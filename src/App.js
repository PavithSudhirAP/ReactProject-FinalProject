//import logo from './logo.svg';
import "./App.css";
import LoginPage from "./components/LoginPage";
import Registrationpage from "./components/Registrationpage";

import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import Product from "./components/Product";
import SetPassword from "./components/SetPassword";
import Todo from "./components/Todo";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<Registrationpage />} />
          <Route exact path="/setpassword" element={<SetPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route exact path="/products" element={<Product />} />
          <Route exact path="/posts" element={<Post />} />
          <Route exact path="/userListing" element={<User />} />
          <Route exact path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
