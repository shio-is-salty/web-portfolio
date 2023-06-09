import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import axios from "axios"
import IndexPage from "./Pages/IndexPage"
import ProjectPage from "./Pages/ProjectPage"
axios.defaults.baseURL = "http://localhost:4000"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
