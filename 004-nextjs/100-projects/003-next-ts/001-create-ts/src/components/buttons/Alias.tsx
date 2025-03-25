"use client"
import React from 'react'

type User = {
	id: number;
	name: string;
};
let user: unknown = {
	id: 1,
	name: "ces"
}
let num: number = 123;
let str = num as unknown as string;

console.log(str.trim);

function Alias() {
	const inputElement = document.getElementById("username") as HTMLInputElement;
	console.log(inputElement.value);
	return (
		<div id='username'>Alias</div>
	)
}

export default Alias