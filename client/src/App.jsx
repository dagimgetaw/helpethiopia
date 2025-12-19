import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import DonatePage from "./pages/DonatePage";
import TeamPage from "./pages/TeamPage";
import Chapa from "./feature/payment/components/Chapa";
import Stripe from "./feature/payment/components/Stripe";
import SuccessPage from "./pages/SuccessPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/pay-with-chapa" element={<Chapa />} />
          <Route path="/pay-with-stripe" element={<Stripe />} />
          <Route path="/payment-success" element={<SuccessPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
