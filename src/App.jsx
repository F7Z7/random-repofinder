import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-gradient-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1] flex flex-col items-center justify-center">
            <Header/>
        </div>
    )
}

export default App
