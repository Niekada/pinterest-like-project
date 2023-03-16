import { useQuery } from "@tanstack/react-query"
import { fetchImages } from "../api/images"
import { PixabayImage } from "../types/image";

const IMAGES = "IMAGES";

export const useImages = (page: number) => {
    return useQuery<PixabayImage[], Error>([IMAGES, page], () => fetchImages(page))
};