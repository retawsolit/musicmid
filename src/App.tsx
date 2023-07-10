import "./App.css";

import React, { Fragment } from "react";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Home from "./pages/Home/Home";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Routes>
          {publicRoutes.map((publicRoute, index) => {
            const Layout =
              publicRoute.layout === null ? Fragment : publicRoute.layout;
            const Page = publicRoute.component;

            return (
              <Route
                key={index}
                path={publicRoute.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes> */}
        <AuthProvider>
          <AppProvider>
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </AppProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
