'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Identity } from '../Brand';

// import { pages } from 'utils/settings';
import { cn } from '@/utils/helpers';

import styles from './HomeButton.module.scss';


// const route = pages[0];

// console.log(route);

// ToDo tweaking component type due to context
const Component = ({ children, href, className }) => {
  // if (to) {
  //   return <Link to={to} className={className}>{children}</Link>;
  // } else {
  //   return <div className={className}>{children}</div>;
  // }
  return <Link href={href} className={className}>{children}</Link>;
}

export const HomeButton = ({ onClick, to, theme }) => {
  const [ active, setActive ] = useState(true);

  const classes = {
    root: cn(styles.module, 'Home-button', 'Header-item'),
    container: cn('HomeButton-container MenuItem', active && 'active')
  }
  
  return(
    <Component 
      //href={route.href} 
      className="Header-item"
    >
      <a className={classes.root} onClick={onClick} >
        <div className={classes.container}>
          <Identity.Dmark />
        </div>
      </a>
    </Component>
  );
}
