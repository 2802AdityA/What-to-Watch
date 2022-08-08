import React from "react";

function Genre(props) {
	return <option value={props.id}>{props.name}</option>;
}

export default Genre;
