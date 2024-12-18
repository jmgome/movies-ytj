import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../basic/Login/Login";
import { MainRender } from "../MainRender/MainRender";
import { CreateAcconunt } from "../basic/CreateAcconunt/CreateAccount";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="CreateAcconunt" element={<CreateAcconunt />} />
        <Route path="/*" element={<MainRender />} />
      </Routes>
    </>
  );
};
