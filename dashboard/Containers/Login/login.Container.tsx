"use client";
import { useState } from "react";
import LoginTab from "../../Components/login";

export default function LoginPageContainer() {
  const [disableSignIn, setDisableSignIn] = useState(false);
  const [rememberMeEnabled, setRememberMeEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const checkLoginStatus = () => {
    console.log("Checking login status...");
  };
  return (
    <LoginTab
      loginFunction={() => checkLoginStatus()}
      disableSignIn={disableSignIn}
      setSignInDisable={setDisableSignIn}
      emailId={""}
      password={""}
      rememberMeEnabled={rememberMeEnabled}
      setRememberMeEnabled={setRememberMeEnabled}
      warningMessage={errorMessage}
    />
  );
}
