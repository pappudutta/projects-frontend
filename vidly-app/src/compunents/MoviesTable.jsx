import React, { Component } from "react";

import Like from "./Like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onliked={() => this.props.onLiked(movie)} />
      ),
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <>
        <Table
          onSort={onSort}
          sortColumn={sortColumn}
          columns={this.columns}
          data={movies}
        />
      </>
    );
  }
}

export default MoviesTable;
