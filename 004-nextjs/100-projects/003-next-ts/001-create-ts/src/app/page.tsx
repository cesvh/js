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
import Interfaces from "@/components/buttons/Interfaces";
import TipadoProps from "@/components/buttons/TipadoProps";
import Spread from "@/components/buttons/Spread";
import Intersecciones from "@/components/buttons/Intersecciones";

function Page() {
  return (
    <div>
      <Fundamentos text="Texto props" /><br /><br />
      <PropsTipados text="Texto props" subtitle="Subtítulo" color="red" /><br /><br />
      <FuncionExpresion /><br /><br />
      <Css style={{
        color: "black",
        backgroundColor: "gold",
        fontSize: "16px",
        padding: "5px"
      }} /><br /><br />
      <RecordType
        onClick= { () => { console.log(`Mi onClick`); }}
        userAges={{ "César": 30, "Cesar": 40, "Ces": 50 }} /><br /><br />
      <ReactNode /><br /><br />
      <JSXElement /><br /><br />
      <Setters /><br /><br />
      <DefaultProps /><br /><br />
      <Interfaces /><br /><br />
      <TipadoProps /><br /><br />
      <Spread /><br /><br />
      <Intersecciones /><br /><br />
    </div>
  )
}

export default Page;