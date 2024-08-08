import React from 'react';
import { cn } from '@/utils/helpers';

import { Grid, Row, Column } from '@/common-ui/Grid'
import { Card, CardGroup, ImageCard, Tile, ClickableTile, StaticTile, RatioObject } from '@/common-ui';
import Logo from '../Brand/Logo'

import styles from './LogoGrid.module.scss';

const LogoGrid = ({ children, column }) => {

  const logoCol = 2;

  const attributes = {
    col: logoCol,
    colSm: 1,
    colMd: logoCol,
    colLg: logoCol,
    dark: false,
  }

  const logoList = [
    "AirHelp",
    "DanskeSpil",
    "Energa",
    "EsSystem",
    "BMWGroup",
    "SecureVisio",
    "OKE",
    "Tmobile",
    "LPP",
    "Straumann",
    "Wiha"
  ];



  const classes = {
    root: cn(styles.module),
    logo: cn(styles.logo),
    card: cn(styles.card, 'aspect-ratio', 'aspect-ratio--1x1', 'card--spacing')
  };

  const LogoComponent = ({ type, settings }) => {
    return (
      <div className={classes.card}>
        <div className="Card-container aspect-ratio--object">
          <div className="fbr-tile">
            {React.createElement(Logo[type], settings)}
          </div>
        </div>
      </div>
    );  
  }


  return (
    
    <CardGroup className={classes.root}>
      {logoList.map(logo => (
        <Column className={classes.logo} key={logo} noGutter {...attributes}>
          <LogoComponent key={logo} type={logo} />
        </Column>
      ))}
    </CardGroup>

  );
}

export default LogoGrid;




  
  