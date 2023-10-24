
import Header from "../components/header.js";
import Footer from "../components/footer.js";


import {Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header></Header>
        <Outlet />
      <Footer></Footer>    
    </>
  );
};

export default Layout;
