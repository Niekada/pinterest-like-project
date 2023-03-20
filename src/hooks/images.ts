import { useQuery } from "@tanstack/react-query"
import { fetchImages } from "../api/images"
import { PixabayImage } from "../types/image";

const IMAGES = "IMAGES";

export const useImages = (page: number, search: string) => {
    return useQuery<PixabayImage[], Error>([IMAGES, page, search], () => 
        fetchImages(page, search)
    );
  };