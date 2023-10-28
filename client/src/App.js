import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./components/Blogs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
