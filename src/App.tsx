import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Memory from "./pages/Memory"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory/:slug" element={<Memory />} />
      </Routes>
    </Layout>
  )
}
