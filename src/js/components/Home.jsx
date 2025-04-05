import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
//Notas para mí.

//create your first component
export default function Mylight() {
	const [clikedColor, setClikedColor] = useState(null);

	const myStyle = (color) => {
		return {
//la flecha se ve fea, después miramos como cambiarla cuando se haga hover,
//dia 2 lo dejamos con cursor por que el Hover me dio pereza.

			width: "80px",
			height: "80px",
			borderRadius: "50%",
			margin: "10px",
			backgroundColor: color,
			transition: "all 0.3s",
			boxShadow: clikedColor === color ? `0 0 30px 10px ${color}` : "none",
			cursor: "pointer"
		};
	};

	return (
		//Dejé separados los estilos del div grande poniéndolos en clase para no confundirme con los divs de adentro.

		<div className="bg-dark 50vh Traffic rounded " style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
			<div style={myStyle("red")}
				onClick={() => setClikedColor("red")}></div>

			<div style={myStyle("yellow")}
				onClick={() => setClikedColor("yellow")}></div>

			<div style={myStyle("green")}
				onClick={() => setClikedColor("green")}></div>		

		</div>
	
);
}	
