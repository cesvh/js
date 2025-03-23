"use client"

import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
};

function Button( {children}: ButtonProps ) {
    return <button>{children}</button>
}

function ReactNode() {
  return (
    <div>
        <Button>
            <span>ReactNode span</span>
            <div>ReactNode div</div>
        </Button>
    </div>
  )
}

export default ReactNode