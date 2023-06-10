import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import IndexPage from "./Pages/IndexPage"
import ProjectPage from "./Pages/ProjectPage"

// axios
import axios from "axios"
import AddProjectFormPage from "./Pages/AddProjectFormPage"
axios.defaults.baseURL = "http://localhost:4000"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/add/project" element={<AddProjectFormPage />} />
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
