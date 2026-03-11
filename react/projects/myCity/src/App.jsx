import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Districts from "./pages/districts";
import District from "./pages/district";
import Place from "./pages/place";
import NotFound from "./pages/notFound";

window.document.title = "Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="districts" element={<Districts />} />
        <Route path="districts/:districtId" element={<District />} />
        <Route
          path="districts/:districtId/places/:placeId"
          element={<Place />}
        />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
