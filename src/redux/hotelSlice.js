import { createSlice } from "@reduxjs/toolkit";

import { fetchAllHotelData, fetchHotelByKeyword, fetchHotelByDate } from "../api";

const initialState = {
  data: null,
  checkInDate: new Date(),
  checkOutDate: null,
  searchResult: [],
  searchTextValue: "",
  searchCheckInValue: "",
  searchCheckOutValue: "",
  loading: null,
  error: null,
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchTextValue = action.payload;
    },
    setSearchCheckInValue: (state, action) => {
      state.searchCheckInValue = action.payload;
    },
    setSearchCheckOutValue: (state, action) => {
      state.searchCheckOutValue = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchAllHotelData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
      .addCase(
        fetchAllHotelData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        })
      .addCase(
        fetchAllHotelData.rejected, (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        })
      .addCase(
        fetchHotelByKeyword.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
      .addCase(
        fetchHotelByKeyword.fulfilled, (state, action) => {
          state.searchResult = action.payload;
          state.loading = false;
        })
      .addCase(
        fetchHotelByKeyword.rejected, (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        })
      .addCase(
        fetchHotelByDate.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
      .addCase(
        fetchHotelByDate.fulfilled, (state, action) => {
          state.searchResult = action.payload;
          state.loading = false;
        })
      .addCase(
        fetchHotelByDate.rejected, (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        })
  },
});

export const {
  setCheckInDate,
  setCheckOutDate,
  setSearchValue,
  setSearchCheckInValue,
  setSearchCheckOutValue
} = hotelSlice.actions;

export default hotelSlice.reducer;
