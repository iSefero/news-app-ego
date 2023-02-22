// i18n
import { useTranslation } from "react-i18next";

// Common
import { Header } from "../../components/header/Header";


export const Main = () => {
  const { t } = useTranslation()

  return (
    <div style={{ height: "100vh" }}>
      <Header/>
      <div>
        <h1 style={{ margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "100px"}}>{t("phrases.smile")}</h1>
      </div>
    </div>
  )
}