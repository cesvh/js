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
import EventHandlers from "@/components/buttons/EventHandlers";

function Page() {
  return (
    <div>
      <Fundamentos text="Texto props" /><br />
      <PropsTipados text="Texto props" subtitle="Subtítulo" color="red" /><br />
      <FuncionExpresion /><br />
      <Css style={{
        color: "black",
        backgroundColor: "gold",
        fontSize: "16px",
        padding: "5px"
      }} /><br />
      <RecordType
        onClick= { () => { console.log(`Mi onClick`); }}
        userAges={{ "César": 30, "Cesar": 40, "Ces": 50 }} /><br />
      <ReactNode /><br />
      <JSXElement /><br />
      <Setters /><br />
      <DefaultProps /><br />
      <Interfaces /><br />
      <TipadoProps /><br />
      <Spread /><br />
      <Intersecciones /><br />
      <EventHandlers /><br />
    </div>
  )
}

export default Page;