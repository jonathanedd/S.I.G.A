import React, { useState } from "react";

//COMPONENTS
import NavBarAdmin from "./NavBarAdmin";
import LeftBarSideAdmin from "./LeftBarSideAdmin";
import ViewUsers from "./ViewUsers";

const AdminInterface = () => {
  const [userList, setUserList] = useState(null);

  //Funcion para renderizar la lista de usuarios
  const handleUserList = () => {
    if (!userList) setUserList(<ViewUsers />);
    console.log(userList);
  };
  return (
    <div>
      {/* Se pasa la funcion por prop a la nav */}
      <NavBarAdmin handleuserlist={handleUserList} />
      <LeftBarSideAdmin />
      {userList}
    </div>
  );
};

export default AdminInterface;
