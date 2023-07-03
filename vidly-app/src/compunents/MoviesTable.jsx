import React, { Component } from "react";
import Like from "./Like";

class MoviesTable extends Component {
  render() {
    const { movies, onDelete, onLiked, onSort } = this.props;

    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => onSort("title")}>Title</th>
              <th onClick={() => onSort("genre.name")}>Genre</th>
              <th onClick={() => onSort("numberInStock")}>Stock</th>
              <th onClick={() => onSort("dailyRentalRate")}>Price</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td> {movie.title} </td>
                <td> {movie.genre.name} </td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onliked={() => onLiked(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default MoviesTable;
