import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layer from "./app/Layer.tsx";
import HomePage from "./app/pages/HomePage.tsx";
import ContactPage from "./app/pages/ContactPage.tsx";
import PolicyPage from "./app/pages/PolicyPage.tsx";
import AboutPage from "./app/pages/AboutPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layer />}>
            <Route path="" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="policy" element={<PolicyPage />} />
            <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
