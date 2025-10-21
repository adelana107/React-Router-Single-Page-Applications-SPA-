import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricingpage from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricingpage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
