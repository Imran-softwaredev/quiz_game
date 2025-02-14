import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Quiz from "@/pages/Quiz";
import Results from "@/pages/Results";

const mainRoutes = [
  { path: "/", component: <Home /> },
  { path: "/quiz/:id", component: <Quiz /> },
  { path: "/results", component: <Results /> },
];

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {mainRoutes.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
