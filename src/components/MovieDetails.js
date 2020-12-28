import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = (props) => {
  if (!props.selectedMovie) {
    <div className='details-container' style={{ width: '70%' }}>
      <h2>Movie</h2>
      <div className='properties'></div>
      <p>Select Movie</p>
    </div>;
  } else {
    return (
      <div className='details-container' style={{ width: '70%' }}>
        <h2>Movie</h2>
        <div className='properties'></div>
        <p>Title: {props.selectedMovie.title}</p>
        <p>Release Date: {props.selectedMovie.releaseDate}</p>
        <p>Rating: {props.selectedMovie.rating}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(MovieDetails);
