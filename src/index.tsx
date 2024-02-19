import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./config/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppHeader } from "./components/Header/Header";

const queryClient = new QueryClient();

const router = createBrowserRouter(ROUTES);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppHeader />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
