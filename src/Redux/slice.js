import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  movies:[]
}

const dataSlice = createSlice({
    name: "movieApp",
    initialState,
    reducers: {

    addMovieToFavorites: (state, action) => {
      state.movies.push(action.payload);
    },
  removeMovieFromFavorites: (state, action) => {
    state.movies = state.movies.filter(item => item.imdbID !== action.payload);
  },
}
})
export const { addMovieToFavorites, removeMovieFromFavorites } = dataSlice.actions;
export default dataSlice.reducer;