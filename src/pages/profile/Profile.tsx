// React
import React from "react"

// Common
import { Header } from "../../components/header/Header";
import { AuthCard } from "../../components/authCard/AuthCard";
import { NonAuthCard } from "../../components/nonAuthCard/NonAuthCard";

const style = {
  display: "flex",
  position: "absolute" as "absolute",
  left: "50%",
  margin: "0 auto",
  top: "50%",
  transform: "translate(-50%, -50%)"
}


export const Profile = (): React.ReactElement => {
  // Display different pages depending on whether the user is logged in or not
  const showProfile = localStorage.getItem("person") !== null
    ?
    <AuthCard/>
    :
    <NonAuthCard/>;

  return (
    <div >
      <Header/>
        <div style={style}>
          {showProfile}
        </div>
    </div>
  )
}
