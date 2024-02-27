import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        nowPopularMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularovies:(state,action)=>{
            state.nowPopularMovies=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo, addPopularovies}=moviesSlice.actions

export default moviesSlice.reducer