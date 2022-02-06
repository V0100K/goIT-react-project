import React from "react";
import { ReactComponent as GoogleSvg } from "../../images/google.svg";
import s from "./GoogleAuth.module.scss";

const GoogleAuthorization = () => {
  return (
    <div className={s.ButtonWrap}>
      <a
        href="https://kapusta-backend.goit.global/auth/google"
        className={s.ButtonGoogleAuth}
      >
        <GoogleSvg />
      </a>
    </div>
  );
};

export default GoogleAuthorization;
