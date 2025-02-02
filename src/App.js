import './App.css';
import DashboardLayout from "./layouts/DashboardLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />} >
                    <Route path="product" element={<ProductPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
