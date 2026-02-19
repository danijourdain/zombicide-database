import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header'

import Home from './pages/Home'
import Board from './pages/Board'

function App() {
    return (
    <BrowserRouter basename='/zombicide-database'>
      <Header/>
        <main>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="board" element={<Board/>}/>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
