import React from "react";
import Landing from "@components/Landing/Landing";
import Divider from "@components/Divider/Divider";
import Form from "../../components/Form/Form";


const HomePage = () => {
  return (
    <>
      <Landing></Landing>
      <Divider title={"Contact us"}></Divider>
      <Form/>
      {/* <Divider title={"About"}></Divider> */}
    </>
  );
};

export default HomePage;
