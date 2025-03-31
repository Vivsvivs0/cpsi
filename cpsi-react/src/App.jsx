import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const urlImg = "https://www.portaldoholanda.com.br/sites/default/files/imagecache/2020_noticia_fotogrande/portaldoholanda-11985caf495a2486590d048603f1aa32-1342748.jpg"

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
      <h1>Vivi</h1>
      <p>omg deu certo ebaaaaa</p>
      <img width={400} src={urlImg} />
    </>
  )
}

export default App
