import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
} from "react-router-dom"

import { RoutePaths } from "./RoutePaths"
import { HomePage } from "@/pages/HomePage"
import { LoginPage } from "@/pages/LoginPage"

interface RouteHandlerProps {
  to: string
}

export const RouteHandler = ({ to }: RouteHandlerProps) => {
  const prevRoute = useLocation()
  return <Navigate to={to} state={{ prevRoute }} replace />
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <RouteHandler to={RoutePaths.Erro404}></RouteHandler>,
  },
  {
    path: RoutePaths.Erro404,
    element: <>{/* <Erro404Page /> */}</>,
  },
  {
    path: RoutePaths.Login,
    element: <LoginPage />,
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
