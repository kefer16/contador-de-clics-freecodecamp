import React from "react";
import "../css/Contador.css"

export function Contador({ numeroClics }) {
	return <div className="contador">{numeroClics}</div>;
}
