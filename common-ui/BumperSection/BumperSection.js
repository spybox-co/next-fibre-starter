'use client';

import {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';


// import { Grid, Row } from '../Grid';
// import { Link } from '../Link';


export default function BumperSection(props) {
  const { 
    asLink,
    block = 'start',
    className,
    children,
    glyph,
    enabledSize,
    hoveredSize,
    href,
    heading,
    kind,
    label = 'Bumper Section action name',
    onClick,
    noGlyph,
    wrapper,
    section,
    tile
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

  const bumperKind =
    (kind === 'primary' && 'fbr--bumper--primary') ||
    (kind === 'secondary' && 'fbr--bumper--secondary') ||
    (kind === 'tertiary' && 'fbr--bumper--tertiary') ||
    (kind === 'ghost' && 'fbr--bumper--ghost') ||
    (kind === 'danger' && 'fbr--bumper--danger') ||
    (kind === 'warning' && 'fbr--bumper--warning') ||
    (kind === 'green' && 'fbr--bumper--green') ||
    (kind === 'orange' && 'fbr--bumper--orange') ||
    // To-Do
    (kind && `fbr--bumper--custom ${kind}`);

  const classes = {
    root: [ className, 'BumperSection', section ? 'fbr--bumper--section' : 'fbr--bumper', tile && 'fbr--bumper--tile', kind ? bumperKind : (!tile ? 'fbr--bumper--secondary' : ''), wrapper && 'fbr--grid', hovered ? 'hover' : ''].join(' ').trim(),
    container: ['fbr--bumper--container'].join('').trim(),
  };

  let isLink;
  // if (href !== undefined) {
  //   isLink = href.charAt(0) === '/';
  // }

  const customAttributes = !hovered ? { maxHeight: enabledSize } : { maxHeight: hoveredSize };

  const BumperSectionContainer = (
    <div
      role="button"
      onClick={onClick}
      {...eventHandlers}
      ref={bumpRef}
      className={classes.root}
      style={ enabledSize && hoveredSize ? customAttributes : null}
    >
      <>
        {tile && heading && (
            <div className="heading">
              {heading}
            </div>
          )}

        <div className={classes.container}>
          

          {!noGlyph && !tile && (<Glyph type={glyph} />)}
          {label && !children && !tile && (
            <h4 className="label">{label}</h4>
          )}
          {children}
            
    
        </div>
      </>
    </div>
  );

  // Doesn't work as in Tile component - I don't know why?
  // let BumperSectionComponent;


  if (href) {
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