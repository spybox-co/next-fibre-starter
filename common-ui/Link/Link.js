'use client'

import Link from 'next/link';

/*
    Component Link is named as AnchorLink for NextJS usage
    because of native next/link functionality. 
    Export name in barrel export file is still as "Link"

    @SEE ./index.js
    >  export { AnchorLink as Link };
    
*/
export const AnchorLink = (props) => {
  const { 
    target = '_blank',
    href, 
    children 
  } = props;

  let isLink;
  if (href !== undefined) {
    isLink = href.charAt(0) === '/';
  }

  if (isLink) {
    return (
      <Link className="Link" href={href}>
        {children}
      </Link>
    );
  } else {
    return (
      <a className="Link" href={href} rel="noopener noreferrer" target={target}>
        {children}
      </a>
    );
  }
}