import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "../Pages/Hello";

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Hello/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default MyRoutes;