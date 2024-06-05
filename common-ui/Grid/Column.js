import React from 'react';
import { cn } from '@/utils/helpers';



import * as grid from './renderColumns';


import styles from './Layout.module.scss';




export default function Column(props) {
  
  // TODO
  // Styles
  // no-gutters/gutters, no-gutters/gutters on left/right for Lg Md breaks!
  // Consider Sm

  const {
      id,
      className,
      children, 
      empty,
      flex, 
      col, 
      colLg, 
      colMd, 
      colSm, 
      gutter,
      noGutter, 
      gutterLeft, 
      gutterRight,
      style 
  } = props;
  
  /*
      This calculate numbers columns global (col) and at breakpoints (colLg and so on)  
  */

  const colNum = grid.renderColumns(col);
  const colLgNum = grid.renderLargeColumns(colLg);
  const colMdNum = grid.renderMediumColumns(colMd);
  const colSmNum = grid.renderMediumColumns(colSm);

  // if (id) {
  //   console.log(`id check ${id}`, col, colSm, colMd, colLg);
  //   console.log(`id check ${id} numbsy`, colNum, colSmNum, colMdNum, colLgNum);
  // }



  const classes = 
    cn(
      className && className,
      'dtm--column',
      flex && 'dtm--row',
      styles.column, 
      empty && 'column__empty', 
      colNum && `col-${colNum}`,

      // colLgNum ? `col-lg-${colLgNum}` : `col-lg-4`,
      // colMdNum ? `col-md-${colMdNum}` : `col-md-4`,
      // colSmNum ? `col-sm-${colSmNum}` : `col-sm-4`, 

      // colLgNum ? `col-lg-${colLg}` : `col-lg-${colLg || 4}`,
      // colMdNum ? `col-md-${colMd}` : `col-md-${colMd || 4}`,
      // colSmNum ? `col-sm-${colSm}` : `col-sm-${colSm || 4}`, 

      
      
      colSmNum && `col-sm-${colSmNum}`, 
      colMdNum && `col-md-${colMdNum}`,
      colLgNum && `col-lg-${colLgNum}`,

      !empty && !noGutter && 'gutter',

      !empty && (gutter && 'gutter'), 
      !empty && (gutterLeft && 'gutter__left'), 
      !empty && (gutterRight && 'gutter__right')
    );

  return(
    <div 
      className={classes}
      style={style ? style : null} 
      data-id={id ? id : null}
    >
      {children}
    </div>
  );
}

Column.defaultProps = {
  noGutter: false,
  flex: false,
  // gutter: true,
};