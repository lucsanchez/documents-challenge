import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./ui/pages/home";
import { RootLayout } from "./ui/pages/layout";
import { AddDocumentPage } from "./ui/pages/addDocument";

const RoutesTree = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/add-document" element={<AddDocumentPage />} />
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
