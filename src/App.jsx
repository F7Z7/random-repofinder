import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./pages/Hero.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 min-h-screen ">
            <Hero/>
        </div>
    )
}

export default App
