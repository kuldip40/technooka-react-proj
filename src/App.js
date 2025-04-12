import FeesCreation from "./pages/FeesCreation";
import AppLayout from "./layouts/AppLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to={"fees-creation"} />} />
      <Route path="login" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="fees-creation" element={<FeesCreation />} />
      </Route>
    </Routes>
  );
}

export default App;
