import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import style from "./demo.module.css";

const Demo = () => {
  return <div className={style.head}>Hello !</div>;
};

export default Demo;
