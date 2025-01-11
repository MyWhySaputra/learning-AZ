import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { useTranslation } from "react-i18next";
//import { useEffect } from "react";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Set language from localStorage on initial load
  // useEffect(() => {
  //   const savedLanguage = localStorage.getItem("language") || "en";
  //   i18n.changeLanguage(savedLanguage);
  // }, [i18n]);

  const handleTrans = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code); // Save the selected language to localStorage
  };

  return (
    <>
      <div className="lg:px-10 mx-auto navbar bg-base-100">
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <Button
              tabIndex={0}
              role="button"
              className="btn lg:hidden"
              severity="secondary"
              icon="pi pi-bars"
            />
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">{t("Home")}</Link>
              </li>
              <li>
                <Link to="/calendar">{t("Calendar")}</Link>
              </li>
              <li>
                <Link to="/autoselect">{t("AutoSelect")}</Link>
              </li>
              <li>
                <Link to="/table">{t("Table")}</Link>
              </li>
              <li>
                <Link to="/menu">{t("Menu")}</Link>
              </li>
              <li>
                <Link to="/timeline">{t("Timeline")}</Link>
              </li>
              <li>
                <Link to="/import">ImportIMG</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">{t("LEARNING")}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-lg menu menu-horizontal px-1">
            <li>
              <Link to="/">{t("Home")}</Link>
            </li>
            <li>
              <Link to="/calendar">{t("Calendar")}</Link>
            </li>
            <li>
              <Link to="/autoselect">{t("AutoSelect")}</Link>
            </li>
            <li>
              <Link to="/table">{t("Table")}</Link>
            </li>
            <li>
              <Link to="/menu">{t("Menu")}</Link>
            </li>
            <li>
              <Link to="/timeline">{t("Timeline")}</Link>
            </li>
            <li>
              <Link to="/import">ImportIMG</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Button
            label="EN"
            onClick={() => handleTrans("en")}
            className="mr-2"
          />
          <Button label="ID" onClick={() => handleTrans("id")} />
        </div>
      </div>
    </>
  );
};
