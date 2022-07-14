import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Contact from "./Contact";
import Home from "./Home";
import Product from "./Product";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link  to="/product">Sản phẩm</Link>
        <Link to="/service">Dịch vụ</Link>
        <Link to="/contact">Liên hệ</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </div>
  );
}

export default App;
