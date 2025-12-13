import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Effect from './pages/Effect';
import Process from './pages/Process';

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="learn" element={<Learn />} />
                    <Route path="effect" element={<Effect />} />
                    <Route path="process" element={<Process />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
