import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

/*--- Pages Components --*/
const Lobby = lazy(() => import("../pages/lobby.jsx"))
const Room = lazy(() => import("../pages/Room.jsx"))


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  )
}

export default AllRoutes
