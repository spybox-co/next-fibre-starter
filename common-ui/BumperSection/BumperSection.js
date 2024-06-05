'use client';

import {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';


import { Grid, Row } from '../Grid';
import { Link } from '../Link';

// import './BumperSection.scss';

export default function BumperSection(props) {
  const { 
    asLink,
    block = 'start',
    children,
    glyph,
    href,
    label = 'Bumper Section action name',
    onClick,
    wrapper,
  } = props;


  const bumpRef = useRef(null);
  const [hovered, setHovered] = useState();
  const scrollSettings = {
    behavior: 'smooth',
    block: block // start, center, end, or nearest. Defaults to start
  };
  const executeScroll = () => bumpRef.current.scrollIntoView(scrollSettings);
  // run this function from an event handler or an effect to execute scroll
  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      }
    }),
    []
  );

  useEffect(() => {
    if (hovered) {
      executeScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  const classes = {
    root: ['BumperSection', 'fbr--bumper-section', wrapper && 'fbr--grid', hovered ? 'hover' : ''].join(' ').trim(),
    container: ['fbr--bumper-section--container'].join(' ').trim()
  };

  let isLink;
  // if (href !== undefined) {
  //   isLink = href.charAt(0) === '/';
  // }

  const BumperSectionContainer = (
    <div
      role="button"
      onClick={onClick}
      {...eventHandlers}
      ref={bumpRef}
      className={classes.root}
    >
      <div className={classes.container}>
        <Glyph type={glyph} />

        
        {label && !children && (<h4 className="label">{label}</h4>)}
        {children}
          
  
      </div>
    </div>
  );

  // Doesn't work as in Tile component - I don't know why?
  // let BumperSectionComponent;


  if (asLink) {
    return (
      <a
        href={href}
      >

        {BumperSectionContainer}
      </a>
    );
  } else {
    return BumperSectionContainer;
  }
};



const Glyph = ({ type }) => {
  return <div className="glyph">{type || '↑'}</div>;
};