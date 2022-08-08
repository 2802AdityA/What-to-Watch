import React from "react";
import "../CSS/Description.css";

function Description(props) {
	return (
		<div className="popup-box">
			<div className="box">
				<span className="close-icon" onClick={props.handleClose}>
					x
				</span>

				<div className="d-flex flex-row ">
					<div className="p-2 text">
						Can't you just decide one movie to watch with your friends? We will
						find movies for you if you each enter one of your favourite genres.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Description;
