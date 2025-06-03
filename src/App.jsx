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
                        <div className="flex flex-col items-center justify-center bg-gray-900 min-h-screen">
                            <Hero />
                        </div>
                    }
                />
                <Route
                    path="/results"
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
