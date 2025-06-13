import Usertable from "@/features/users/Usertable";
import { getAllUsers } from "@/lib/data";
import React from "react";

const Userspage = async () => {
  const data = await getAllUsers("s");

  console.log(data);

  return (
    <>
     <Usertable />
    </>
   
  );
};

export default Userspage;
