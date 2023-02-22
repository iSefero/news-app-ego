// Common
import {Header} from "../../components/header/Header";
import {AuthCard} from "../../components/authCard/AuthCard";
import {NonAuthCard} from "../../components/nonAuthCard/NonAuthCard";


export const Profile = () => {
  // Display different pages depending on whether the user is logged in or not
  const showProfile = localStorage.getItem("loggedIn") === "true"
    ?
    <AuthCard/>
    :
    <NonAuthCard/>;

  return (
    <div >
      <Header/>
        <div style={{ display: "flex", position: "absolute", left: "50%", margin: "0 auto", top: "50%", transform: "translate(-50%, -50%)" }}>
          {showProfile}
        </div>
    </div>
  )
}
