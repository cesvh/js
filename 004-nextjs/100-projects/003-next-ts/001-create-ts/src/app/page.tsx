"use client"
import React from "react";
import Fundamentos from "@/components/buttons/Fundamentos";
import PropsTipados from "@/components/buttons/PropsTipados";
import Css from "@/components/buttons/Css";
import RecordType from "@/components/buttons/RecordType";
import FuncionExpresion from "@/components/buttons/FuncionExpresion";
import ReactNode from "@/components/buttons/ReactNode";
import JSXElement from "@/components/buttons/JSX.Element"; // Rara vez se usa
import Setters from "@/components/buttons/Setters";
import DefaultProps from "@/components/buttons/DeafultProps";

function Page() {
  return (
    <div>
      <Fundamentos text="Texto props" /><br /><br />
      <PropsTipados text="Texto props" subtitle="Subtítulo" color="red" /><br /><br />
      <FuncionExpresion /><br /><br />
      <Css style={{
        color: "black",
        backgroundColor: "gold",
        fontSize: "20px",
        padding: "10px"
      }} /><br /><br />
      <RecordType
        onClick= { () => { console.log(`Mi onClick`); }}
        userAges={{ "César": 30, "Cesar": 40, "Ces": 50 }} /><br /><br />
      <ReactNode /><br /><br />
      <JSXElement /><br /><br />
      <Setters /><br /><br />
      <DefaultProps /><br /><br />
    </div>
  )
}

export default Page;