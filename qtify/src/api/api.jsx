import axios from "axios";

export const BACKEND_ENDPOINTS = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINTS}/albums/top`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINTS}/albums/new`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
 
export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINTS}/songs`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINTS}/genres`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};