// import { useEffect } from 'react';
// import { store } from '../../store.js';

// import axios from 'axios';
// import { uf } from '../../utils/helpers';
import { startDownload, imageToBlob } from '../../lib/func';

import { Button, Skeleton } from '@/common-ui';

// Todo: check imports/exports in barrel files
import Image from '@/common-ui/Image/Image';

import './Faceimage.scss';

export const Faceimage = ({
  source,
  size = 300,
  // delay,
  update,
  download = true,
  copy = false,
  preview = false,
  newscreen = false
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
      <Item data={source} imageLoaded>
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
      </Item>
    );
  } else {
    return (
      <Item>
        <Skeleton />
      </Item>
    );
  }
};

const Item = ({ children, imageLoaded, data }) => {
  const classes = {
    root: 'Faceimage',
    wrapper: 'Image-wrapper',
    container: 'Image-container',
    image: ['Image', imageLoaded && 'FaceItem'].join(' ').trim()
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
