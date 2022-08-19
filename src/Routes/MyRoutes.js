import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import Hello from "../Pages/Hello";

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/sample" element={<Hello/>} />
                <Route exact path="/" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default MyRoutes;