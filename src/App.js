import React from "react";
import Home from "./Views/Home";
import NotFound from "./Views/NotFound";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />}></Route>
        </Routes>
    );
};

export default App;
