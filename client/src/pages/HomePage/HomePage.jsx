import React from "react";
import Landing from "@components/Landing/Landing";
import Divider from "@components/Divider/Divider";
import Form from "../../components/Form/Form";
import About from "../../components/About/About";


const HomePage = () => {
  return (
    <>
      <Landing></Landing>
      <Divider title={"About us"}></Divider>
      <About/>
      <Divider title={"Our Projects"}></Divider>
      <Divider title={"Contact us"}></Divider>
      <Form/>
      {/* <Divider title={"About"}></Divider> */}
    </>
  );
};

export default HomePage;
