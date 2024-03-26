import { Route, RouteProps, Routes } from "react-router-dom";
import { HomePage } from "@/features/home";

const routes: RouteProps[] = [
  {
    path: "/templates-front",
    Component: HomePage,
  },
];

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} key={route.path} Component={route.Component} />
      ))}
    </Routes>
  );
};

export default Router;
