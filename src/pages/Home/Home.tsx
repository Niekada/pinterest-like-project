import { ImageList, ImageListItem } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import { useImages } from "../../hooks/images";
import { useState, useEffect } from "react"
import { PixabayImage } from "../../types/image";
import { uniqBy } from "lodash";
import { LinearProgress } from '@mui/material';
import { useAppSelector } from "../../hooks/store"

const Home = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<PixabayImage[]>([]);
  const { data, isLoading } = useImages(page, debouncedSearch);
  const images = data || [];

  useEffect(() => {
    setTimeout(() => {
      if (searchValue) {
        setDebouncedSearch(searchValue);
        setPage(1);
        setItems([]);
      }
    }, 1000)
  }, [searchValue]);

  useEffect(() => {
    if (!isLoading) {
      setItems(prevItems => 
        uniqBy([...prevItems, ...images], (image) => image.id)
      );
    }
  }, [images]);

  const fetchData = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchData}
      hasMore={true}
      loader={<LinearProgress/>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <ImageList variant="quilted" cols={5} gap={8}>
        {items.map((item) => (
          <ImageListItem key={item.previewURL}>
            <img
              src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.id.toString()}
              loading="lazy"
              style={{ borderRadius: 8, minHeight: 50 }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </InfiniteScroll>
  );
};

export default Home;