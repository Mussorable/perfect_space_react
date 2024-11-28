import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layer from "./app/Layer.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layer />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
