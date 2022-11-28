import { createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = "https://sandbox.impala.travel/v1/hotels";
const apiParameter = "?size=20";
const apiKey = "sandb_zxWQLviOwbflodFtRfxPI8ZndRhunTrnftXOh0wd";

export const fetchAllHotelData = createAsyncThunk(
  "hotel/fetchAllHotelData",
  async () => {
    try {
      const result = await fetch(`${apiURL}${apiParameter}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
        },
      }).then((response) => response.json());
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchHotelByKeyword = createAsyncThunk(
  "hotel/fetchHotelByKeyword",
  async (keyword) => {
    try {
      const result = await fetch(`${apiURL}${apiParameter}&name[like]=${keyword}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
        },
      }).then((response) => response.json());
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchHotelByDate = createAsyncThunk(
  "hotel/fetchHotelByDate",
  async (date) => {
    try {
      const result = await fetch(`${apiURL}${apiParameter}&start=${date.checkIn}&end=${date.checkOut}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
        },
      }).then((response) => response.json());
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);