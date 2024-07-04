import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { Toaster } from "react-hot-toast";

import themeSetting from "utilites/Theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme} from "@mui/material";

export default function () {
    const { mode,direction } = useSelector((state) => state.theme);
    const theme1 = useMemo(
      () => createTheme(themeSetting(direction, mode)),
      [direction, mode]
    );
  return (
    <>
      <Toaster
        position="top-center"
        gutter={8}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            padding: "16px 24px",
          },
        }}
      />
       <ThemeProvider theme={theme1}>
       <>
      <BrowserRouter>

        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="*" element={<Navigate to="/admin/index" replace />} />
        </Routes>
      </BrowserRouter>
       </>
       </ThemeProvider>
    </>
  );
}
