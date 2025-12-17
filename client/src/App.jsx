import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import TeamPage from "./pages/TeamPage";
import WhatWeDoPage from "./pages/WhatWeDoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
