import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero.jsx';
import Results from './pages/Results.jsx'; // Assuming you have this component
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div
                            className="flex items-center justify-center h-screen text-white px-4 flex-wrap bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">

                            <Hero/>
                        </div>
                    }
                />
                <Route
                    path="/Results"
                    element={
                        <div className="flex flex-col items-center justify-center bg-gray-900 min-h-screen">
                            <Results />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
