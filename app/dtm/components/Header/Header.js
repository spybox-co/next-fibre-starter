'use client'

import { useContext, useState, useLayoutEffect, useEffect, useCallback, useRef } from 'react';
// import { useHover } from 'utils/hooks';

import { cn } from '@/utils/helpers';
// import { HomeButton } from './HomeButton';
// import { MenuItem } from 'components/Menu';
import { store } from '../../context/store.js';

import { Grid, Row, Column } from '@/common-ui/Grid';
import { HomeButton } from '@/app/dtm/components/HomeButton';
import { HeaderItem } from '@/app/dtm/components/Header';
import { Menu } from '@/app/dtm/components';

import styles from './Header.module.scss';

const Header = ({ 
    children,
    global, 
    // inactive,
    // active,
    // released,
    changeGlobal, 
    changePage, 
    mobile, 
    // menu, 
    toggleMenu,
    isHover,
    isHoverHomeButton 
  }) => {
  const { state, dispatch } = useContext(store);  
  const [ scrollY, setScrollY ] = useState(0);
  const [ active, setActive ] = useState(state.headerIsActive);
  const [ height, setHeight ] = useState(0);
  const ref = useRef(null);

  

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  // const measuredRef = useCallback(node => {
    
  //   if (node !== null) {
  //     setHeight(node.getBoundingClientRect().height);
  //   }
    
  // }, []);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);


  useEffect(() => {
    console.log("unmount state:", state);

    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
       window.removeEventListener("scroll", onScroll, { passive: true });
       setHeight(ref.current.offsetHeight);
    }
    
  }, []);

  useEffect(() => {
    console.log("unmount state:", state.headerIsActive);
    setActive(state.headerIsActive);
  }, [state.headerIsActive]);

  useEffect(() => {
    console.log("height", height);
  }, [height]);

  const classes = {
    root: cn('fbr--grid', styles.module, 'Header-module', active ? styles.active : styles.global), // ToDo -> context and possible classes: isHover.homeButton && !global && "hovered", "Header", "Header-container"
    container: cn(styles.container),
    navigationModule: cn(styles.navigation, 'Header--navigation-module')
  }


  
  return(
    <header 
      ref={ref}
      className={classes.root} 
      style={{ 
        // position: 'sticky',
        // top: 0, 
        // height: height-scrollY, 
        // minHeight: 100,
        // background: `rgb(255,255,255, ${scrollY/10000})`, 
      }}>
      <Row className={classes.container}  >
        <Column col={4} colSm={1} colMd={4} colLg={4} className={styles.home} noGutter>
          <HomeButton />
          <span>Height: {height}</span>
        </Column>
      


      <HeaderGlobalModule />

        {!global && (
          <div 
            className="FocusArea" 
            // ref={hoverRef} 
            // onClick={() => handleHomeButtonClick(global)} 
          />)}

        {/* {mobile && <div><MenuItem hash={'work'} /></div>} */}

      <Column col={8} colSm={3} colMd={4} colLg={8} className={classes.navigationModule} noGutter>
        {/* <div style={{ 
            position: 'sticky',
            // top: `50%`, 
            height: height/2-scrollY/2, 
            // minHeight: 100,
            width: 10, 
            background: 'red' 
          }} 
        /> */}
        <Menu />
        {children}
      </Column>

      </Row>

    </header>
  )
}

export default Header;

// const HeaderItem = ({ children }) => (
//   <div className={styles.item}>
//     {children}
//   </div>
// )


const HeaderGlobalModule = () => (
  <div className={styles.globalModule} />
)







export const handleHomeButtonClick = global => {
  if (!global) return changeGlobal("released")
  // if (!global && !mobile) return changeGlobal("released")
  if (global !== null && !mobile) {
    changeGlobal(null)
    changePage("home");
  }

  // if (!global && mobile) {
  //   changeGlobal("released")
  //   toggleMenu();
  // }
  // if (released && mobile && !menu) {
  //   changeGlobal(!global)
  //   toggleMenu();
  // }
  // if (mobile && !menu) {
  //   changeGlobal("released")
  //   toggleMenu();
  // }


  // if (mobile && menu) {
  //   changeGlobal(null)
  //   toggleMenu();
  // }

  if (mobile) {
    toggleMenu();
  }
}