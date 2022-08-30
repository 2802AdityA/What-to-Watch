import React, { useState } from "react";
import axios from "axios";
import "../CSS/MovieCard.css";
const MovieCard = (props) => {
	const API_URL = "https://api.themoviedb.org/3";
	const [movie, setMovie] = useState({
		movie: {
			id: "",
			title: "",
			overview: "",
			poster_path: "",
			runtime: "",
			vote_average: "",
			genres: [],
		},
	});
	const fetchMovie = async (movieId) => {
		const {
			data: {
				genres,
				id,
				original_title,
				overview,
				poster_path,
				runtime,
				vote_average,
			},
		} = await axios.get(`${API_URL}/movie/${movieId}`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
			},
		});
		setMovie({
			id: id,
			title: original_title,
			overview: overview,
			poster_path: poster_path,
			runtime: runtime,
			vote_average: vote_average,
			genres: genres,
		});
	};
	fetchMovie(props.id);
	const genre = movie.genres;
	const noImage = require("../Image/no-image.jpeg");
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

	return (
		<div className="popup-box">
			<div className="box">
			<button class="close-button" onClick={props.handleClose}></button>

				{
					<div className="d-flex flex-row ">
						<div className="p-2">
							<img
								className="poster-image"
								src={
									movie.poster_path
										? `${IMAGE_PATH}${movie.poster_path}`
										: noImage
								}
								alt=""
							/>
						</div>
						<div className="p-2">
							<div className="d-flex flex-column align-items-left">
								<h1 className="p-2 movie-name">{movie.title}</h1>
								<h6 className="p-2 rating"> Rating: {movie.vote_average}</h6>
								<div className="d-flex flex-row genre-try">
									{genre?.map((genre) => {
										return <p className="p-2 genre-box">{genre.name}</p>;
									})}
								</div>
								<p className="p-2 overview">{movie.overview}</p>
							</div>
						</div>
					</div>
				}
			</div>
		</div>
	);
};

export default MovieCard;
