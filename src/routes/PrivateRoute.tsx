// import { AuthService } from "@/services/endpoints/AuthService"
// import { handleErrorResponse } from "@/utils/helpers/handleResponses"
// import { IApiErrors } from "@/utils/types/erros.type"

// import { useQueries } from "react-query"
// import { Navigate, useLocation, useSearchParams } from "react-router-dom"

// import TiposUsuario from "./TiposUsuario"

// const PrivateRoute = ({
//   children,
//   roles,
//   verificarToken,
// }: {
//   children: JSX.Element
//   roles: TiposUsuario[]
//   verificarToken?: boolean
// }) => {
//   const location = useLocation()
//   const [searchParams, setSearchParams] = useSearchParams()
//   const token = searchParams.get("token")

//   const queries = useQueries([
//     {
//       queryFn: () => {
//         if (!verificarToken) {
//           return AuthService.realizarLogin({ body: {} as any })
//         }
//       },
//       queryKey: "usuario-logado",
//       onError: (e: any) => {
//         handleErrorResponse(
//           "Não foi possível obter o usuário logado",
//           e.response?.data as IApiErrors
//         )
//       },
//       onSettled: () => {},
//     },
//   ])

//   const { isFetched: isFetchedLogado, data } = queries[0]

//   if (!isFetchedLogado) {
//     return <></>
//   }

//   if (
//     (!verificarToken && !data) ||
//     (roles.length && !roles.find((_) => _ == data?.tipoUsuario)) ||
//     (verificarToken && !token)
//   ) {
//     return <Navigate to="/404" state={{ from: location }} />
//   }

//   return children
// }

// export default PrivateRoute
