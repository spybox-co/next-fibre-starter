// import { useEffect } from 'react';
// import { store } from '../../store.js';

// import axios from 'axios';
// import { uf } from '../../utils/helpers';
import { startDownload, imageToBlob } from '../../lib/func';

import { Button, Skeleton } from '@/common-ui';
import { Column, Tile, StaticTile, RatioObject } from '@/common-ui';

// Todo: check imports/exports in barrel files
import Image from '@/common-ui/Image/Image';

import './ImageItem.scss';

export const ImageItem = ({
  source,
  size,
  // delay,
  update,
  download,
  copy,
  preview,
  newscreen
}) => {
  // const { state } = useContext(store);
  // const [source, setSource] = useState(null);

  // const timestamp = Date.now();

  const getImage = async () => {
    // TODO: replace image with index in array in store.js
    //return null;
  };

  const imageReload = () => {
    setTimeout(() => {
      getImage();
    }, 500);
  };


  async function copyImage(imageSrc) {
    const blob = await imageToBlob(imageSrc);
    const item = new ClipboardItem({ 'image/png': blob });
    navigator.clipboard.write([item]);
  }

  if (source && source.url) {
    // const label = `Image of fake ${source.gender} face at age ${source.age}`;
    const label = `Generated face of person, name identity ${source.id}`;
    // console.log('imidz sors', source.src);
    return (
      <ItemC data={source} imageLoaded>
        <Image
          width={size}
          height={size}
          src={source.url}
          alt={label}
          aria-label={label}
        />

        <InfoPanel data={source} />

        <div className="Button-group">
          {update && (
            <Button
              kind="ghost"
              hasOnlyIcon
              renderIcon="Refresh"
              onClick={imageReload}
            >
              Update
            </Button>
          )}
          {copy && (
            <Button
              kind="ghost"
              hasOnlyIcon
              renderIcon="Copy"
              onClick={copyImage}
            >
              Update
            </Button>
          )}

          {download && (
            <Button
              kind="ghost"
              renderIcon="Download"
              hasOnlyIcon
              onClick={() =>
                startDownload(source.url, `faceholder__${source.id}.jpg`)
              }
            >
              Download
            </Button>
          )}

          {preview && (
            <Button
              kind="primary"
              hasOnlyIcon
              renderIcon="EyeOpen"
              onClick={imageReload}
            >
              Update
            </Button>
          )}
          {newscreen && (
            <Button
              anchor
              kind="primary"
              hasOnlyIcon
              renderIcon="Newscreen"
              href={source.src}
              target="_blank"
            >
              Open in new tab
            </Button>
          )}
        </div>
      </ItemC>
    );
  } else {
    return (
      <ItemC>
        <Skeleton />
      </ItemC>
    );
  }
};

ImageItem.defaultProps = {
  size: 300,
  download: true,
  copy: false,
  newscreen: false,
  preview: false

}

const Item = ({ children, imageLoaded, data }) => {
  const classes = {
    root: 'ImageItem',
    wrapper: 'ImageItem-wrapper',
    container: 'ImageItem-container',
    image: ['Image', imageLoaded && 'Item-loaded'].join(' ').trim()
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.image}>{children}</div>
      </div>
    </div>
  );
};

const InfoPanel = ({ data }) => (
  <div className="Info-panel">
    {/* <span>{`${uf(data.gender)}, ${data.age}`}</span> */}
    <span>{`ID: ${data.name}`}</span>
  </div>
);


const ItemC = ({ children, imageLoaded, data }) => {

  return (
    <Column col={2}>
      <RatioObject ratio="1x1">
        <div className="ImageItem">
          {children}
        </div>
      </RatioObject>
    </Column>
  );
};
