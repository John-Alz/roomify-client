import { Route, Routes } from "react-router-dom";
import Home from "../modules/home/routes/Home";
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<Home />} />

    </Routes>
  );
};
