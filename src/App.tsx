import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import LayoutDefault from "components/layouts/LayoutDefault";
import { contents } from "constants/app";
import "assets/scss/index.scss";

const App = () => {
  return (
    <LayoutDefault>
      <Routes>
        {contents.map(
          (content) =>
            content.isShow && (
              <Route
                key={content.label}
                path={content.link}
                element={<content.component />}
              />
            )
        )}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </LayoutDefault>
  );
};

export default App;
