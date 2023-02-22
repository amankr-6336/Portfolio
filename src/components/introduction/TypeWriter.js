import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './TypeWriter.css';

function TypeWriter() {
return (
	<div className="App">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString("FrontEnd developer")
		
	.pauseFor(500)
	.deleteAll()
	.typeString("FullStack web Developer")
	.start();
	}}
	/>
	</div>
);
}

export default TypeWriter;
