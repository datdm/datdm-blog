import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import LayoutDefault from "components/layouts/LayoutDefault";
import "assets/scss/index.scss";

const App = () => {
  return (
    <LayoutDefault>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </LayoutDefault>
  );
};

export default App;
