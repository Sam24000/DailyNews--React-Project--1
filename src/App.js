import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import FetchApi from "./components/FetchApi";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />

                    <Route exact path="/general" element={<FetchApi cat="general" />} />
                    <Route exact path="/business" element={<FetchApi cat="business" />}></Route>
                    <Route exact path="/health" element={<FetchApi cat="health" />}></Route>
                    <Route exact path="/entertainment" element={<FetchApi cat="entertainment" />}></Route>
                    <Route exact path="/sports" element={<FetchApi cat="sports" />}></Route>
                    <Route exact path="/technology" element={<FetchApi cat="technology" />}></Route>
                </Routes>
                <Footer/>
            </Router>

        </>
    );
};
export default App;
