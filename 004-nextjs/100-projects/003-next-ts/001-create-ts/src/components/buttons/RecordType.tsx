"use client"
import React from 'react'

type ButtonPropsRecordsTypes = {
    onClick: (text: string) => void;
    userAges: Record<"César" | "Cesar" | "Ces", number>;
};

function RecordType( { onClick, userAges}: ButtonPropsRecordsTypes) {
  return (
    <button onClick={ (text) => onClick(`${text}`) }>
      {userAges.Ces}
    </button>
  )
}

export default RecordType