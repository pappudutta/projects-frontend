import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
<<<<<<< HEAD
=======
import Like from "./common/like";
>>>>>>> parent of 904c8e7 (feat: pagination)

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  // Testing Purpose
  //   handleDelete = movie => {
  //     const movies = this.state.movies;
  //     const index = movies.findIndex(i => i._id === movie._id);
  //     if (index !== -1) {
  //       movies.splice(index, 1);
  //       this.setState(movies);
  //     }
  //   };
  // Testing Purpose

<<<<<<< HEAD
=======
  handleToggleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

>>>>>>> parent of 904c8e7 (feat: pagination)
  render() {
    const { length: count } = this.state.movies;

    return (
      <div>
        <h3>
          {count === 0
            ? "There is no movie in the list."
            : `There are ${count} movies in this list.`}
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td> {movie.title} </td>
                <td> {movie.genre.name} </td>
                <td> {movie.numberInStock} </td>
                <td> {movie.dailyRentalRate} </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
