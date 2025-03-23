"use client"
import React from "react";
import Fundamentos from "@/components/buttons/Fundamentos";
import PropsTipados from "@/components/buttons/PropsTipados";
import Css from "@/components/buttons/Css";
import RecordType from "@/components/buttons/RecordType";
import FuncionExpresion from "@/components/buttons/FuncionExpresion";
import ReactNode from "@/components/buttons/ReactNode";

function Page() {
  return (
    <div>
      <Fundamentos text="Texto props" /><br /><br />
      <PropsTipados text="Texto props" subtitle="Subtítulo" color="red" /><br /><br />
      <FuncionExpresion /><br /><br />
      <Css style={{
        color: "black",
        backgroundColor: "gold",
        fontSize: "160px",
        padding: "20px"
      }} /><br /><br />
      <RecordType
        onClick= { () => { console.log(`Mi onClick`); }}
        userAges={{ "César": 30, "Cesar": 40, "Ces": 50 }} /><br /><br />
      <ReactNode /><br /><br />
    </div>
  )
}

export default Page;