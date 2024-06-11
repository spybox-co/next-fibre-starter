import {
  useEffect,
  useState,
  useContext,
} from 'react';

import { store } from '@/app/faceholder/context/store.js';


import { Wrapper } from '@/components';
import { Grid, Row, Column } from '@/common-ui';
import { BumperSection, Skeleton } from '@/common-ui';


import { CommandBar } from '@/app/faceholder/components/CommandBar';
import { Faceimage } from '@/app/faceholder/components/Faceimage';



import './Gallery.scss';


// Pagination
// https://www.youtube.com/watch?v=IYCa1F-OWmk&ab_channel=TraversyMedia
// Load More
// https://www.youtube.com/watch?v=9YhlGTC87tw

// New Name
// GaleryItems (Section. List) -> GalleryAsset (Card)

const itemsAmount = 48;
const moreItems = 48;

export const Gallery = () => {
  const { state } = useContext(store);
  const { assets, refresh } = state;
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(itemsAmount);
  const skeletons = Array.from(Array(24).keys());

  // const isLoading = state.refresh;

  useEffect(() => {
    console.log('Asety', assets);

    if (assets) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [assets]);

  // @Param: with refresh option To-do
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  useEffect(() => {
    if (refresh) {
      setLoading(true);
      setCount(itemsAmount);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [refresh]);
  useEffect(() => {
    console.log("Results:", count);
  }, [count]);

  const listProps = {
    data: assets,
    count: count,
    skeletons: skeletons,
    isLoading: isLoading
  };

  // const pageReload = () => {
  //   dispatch({
  //     type: 'refresh',
  //     value: true
  //   });
  // };

  const loadMore = () => {
    setCount(count + moreItems);
  };

  const LoadMoreButton = () => (
    <div className="Card aspect-ratio-flex">
      <BumperSection
        glyph="↓"
        label="Load more"
        onClick={loadMore} 
        block="nearest"
      />
    </div>
  );

  /*
    <Suspense fallback={<Skeleton />}></Suspense>
  */

  return (
    <Grid className="Gallery-module">
      <section id="browse" className="BrowsePhotos">
        <CommandBar results={count} />
        <div className="List-container">
          <ul className="Gallery List">
            <ListComponent {...listProps} />
          </ul>

          {!isLoading && <LoadMoreButton />}
        </div>
      </section>
    </Grid>
  );
};

const ListComponent = ({ data, count, isLoading, skeletons }) => {
  const Loading = () => {
    return (
      <>
        {skeletons.map((skeleton) => (
          <ImageCardWrapper key={skeleton}>
            <div className="Image-placeholder">
              <Skeleton />
            </div>
          </ImageCardWrapper>
        ))}
      </>
    );
  };

  const Content = () => {
    return (
      <>
        {data.slice(0, count).map((face, i) => (
          <ImageCardWrapper key={i}>
            <Faceimage source={face} update={false} download />
          </ImageCardWrapper>
        ))}
      </>
    );
  };

  return isLoading ? <Loading /> : <Content />;
  // return <Content />;
};

const ImageCardWrapper = ({ children }) => (
  <li className="Card aspect-ratio-1-1 List-item">
    <div className="Faceimage">{children}</div>
  </li>
);
