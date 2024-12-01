import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layer from "./app/Layer.tsx";
import HomePage from "./app/pages/HomePage.tsx";
import ContactPage from "./app/pages/ContactPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layer />}>
            <Route path="" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
