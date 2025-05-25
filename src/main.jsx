import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Home from "./components/Home.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Users2 from "./components/Users2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://coffee-store-server-ruby-one.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "coffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ruby-one.vercel.app/coffees/${params.id}`
          ),
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ruby-one.vercel.app/coffees/${params.id}`
          ),
        Component: UpdateCoffee,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "/*",
        Component: ErrorPage,
      },
      {
        path: "users",
        loader: () =>
          fetch("https://coffee-store-server-ruby-one.vercel.app/users"),
        Component: Users,
      },
      {
        path: "users2",
        Component: Users2,
      },
    ],
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
