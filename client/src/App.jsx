import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import DonatePage from "./pages/DonatePage";
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import Chapa from "./feature/payment/components/Chapa";
import Stripe from "./feature/payment/components/Stripe";
import SuccessPage from "./pages/SuccessPage";
import Volnteer from "./feature/volunteer/components/volnteer";
import SuccessRegistration from "./feature/volunteer/components/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/pay-with-chapa" element={<Chapa />} />
          <Route path="/pay-with-stripe" element={<Stripe />} />
          <Route path="/payment-success" element={<SuccessPage />} />
          <Route path="/volunteer-registeration" element={<Volnteer />} />
          <Route path="/ss" element={<SuccessRegistration />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
