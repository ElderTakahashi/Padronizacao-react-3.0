import axios from "axios"

const axiosConfig = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
  })

  // api.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     const is401 = error.response?.status === 401
  //     const isNetworkError =
  //       !error.response && error.message === "Network Error"

  //     const isSignUpRoute = window.location.pathname === RoutePaths.SignUp

  //     if (
  //       is401 &&
  //       !isSignUpRoute &&
  //       window.location.pathname !== RoutePaths.Login
  //     ) {
  //       window.location.href = RoutePaths.Login
  //     } else if (isNetworkError) {
  //       console.warn("Problema de rede detectado:", error)
  //     }

  //     return Promise.reject(error)
  //   }
  // )

  return api
}

export const api = axiosConfig()
