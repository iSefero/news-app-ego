// React
import React from "react"

// Common
import { Header } from "../../components/header/Header";
import { AuthCard } from "../../components/authCard/AuthCard";
import { NonAuth } from "../../components/nonAuth/NonAuth";
import { styles } from "./ProfileStyles";



export const Profile = (): React.ReactElement => {
  // Display different pages depending on whether the user is logged in or not
  const showProfile = localStorage.getItem("person") !== null
    ?
    <AuthCard/>
    :
    <NonAuth/>;

  return (
    <div >
      <Header/>
        <div style={styles}>
          {showProfile}
        </div>
    </div>
  )
}
