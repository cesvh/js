"use client"

import React from 'react'
import { JSX } from 'react';

type ButtonProps = {
    children: JSX.Element | JSX.Element[] | string;
};

function Button( {children}: ButtonProps ) {
    return <button>{children}</button>
}

function JSXElement() {
  return (
    <div>
        <Button>
            <span>JSXElement span</span>
            <div>JSXElement div</div>
        </Button>
    </div>
  )
}

export default JSXElement