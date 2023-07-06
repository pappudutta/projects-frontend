import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/Pagination";
import { Paginate } from "./utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currrentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ genres, movies: getMovies() });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn,
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = Paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div>
        <h1 style={{ color: "red" }}></h1>

        <div className="row my-2">
          <div className="col-3 mt-5">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col-8">
            <h3>
              {count === 0
                ? "There is no movie in the list."
                : `There are ${totalCount} movies in this list.`}
            </h3>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onLiked={this.handleLike}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
