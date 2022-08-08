import React, { useState } from "react";
import MovieCard from "./MovieCard.jsx";

const MovieThumbnail = ({ movie }) => {
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
	const noImage = require("../Image/no-image.jpeg");
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className={"movie-card"}>
			<div className="try">
				<img
					onClick={togglePopup}
					className={"movie-cover hover-effect"}
					src={
						movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : noImage
					}
					alt=""
				/>
			</div>

			<h5 className="movie-title">{movie.title}</h5>
			{isOpen && <MovieCard handleClose={togglePopup} id={movie.id} />}
		</div>
	);
};

export default MovieThumbnail;
