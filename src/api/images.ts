import axios from "axios";
import { PixabayImage } from "../types/image";

const URL = "https://pixabay.com/api";
const KEY = "34412166-ee6c29a8baa79b5c022dcde95"

export const fetchImages = (page: number): Promise<PixabayImage[]> => {
    return axios
        .get(URL, { params: { key: KEY, page } })
        .then((response) => response.data.hits)
};
