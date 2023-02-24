// React
import React from "react"

// i18n
import { useTranslation } from "react-i18next";

// Common
import { Header } from "../../components/header/Header";

const styles: React.CSSProperties = {
  margin: "0",
  position: "absolute",
  top: "50%",
  textAlign: "center",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "100px"
};


export const Main = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <div >
      <Header/>
      <div>
        <h1 style={styles}>{t("phrases.smile")}😁</h1>
      </div>
    </div>
  )
}