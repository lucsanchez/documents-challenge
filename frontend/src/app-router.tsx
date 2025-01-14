import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./ui/pages/home";
import { RootLayout } from "./ui/pages/layout";

const RoutesTree = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path="" element={<HomePage />} />
    </Route>
  </Routes>
);

export function AppRouter() {
  return (
    <Router>
      <RoutesTree />
    </Router>
  );
}
