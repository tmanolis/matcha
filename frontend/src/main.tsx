import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Profile from "./pages/ProfilePage.tsx";
import NotFound from "./pages/NotFoundPage.tsx";
import Profiles from "./pages/profilesPage.tsx";
import Home from "./pages/HomePage.tsx";
import SignIn from "./pages/SignInPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import AuthProvider from "./components/AuthProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/profiles",
    element: (
      <ProtectedRoute>
        <Profiles />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/profiles/:profileId",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
