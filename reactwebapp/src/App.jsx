import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mySkills from './assets/MySkills.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <a href="https://docs.google.com/document/d/1HRdmeMjfBZUYRKjPbenYW3JesHNwwcnh/edit?usp=sharing&ouid=117587819238090799921&rtpof=true&sd=true" target="_blank">
                <img src={mySkills} className="logo react" alt="My Skills" />
            </a>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => setCount1((count1) => count1 + Math.PI)}>
                    pi++ is {count1}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more or click on my picture to go to my resume
            </p>
        </>
    )
}

export default App
