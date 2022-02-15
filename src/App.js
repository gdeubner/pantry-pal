import { Route, Routes } from "react-router-dom";
import React from "react";

import FilterPage from "./pages/Filter";
import ResultsPage from "./pages/Results";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<ResultsPage />} />
                <Route path="/filter" element={<FilterPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
