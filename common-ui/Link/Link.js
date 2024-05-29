"use client"
import { Link as NextLink } from 'next/link';

import './Link.scss';

export const Link = (props) => {
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
      <NextLink className="Link" href={href}>
        {children}
      </NextLink>
    );
  } else {
    return (
      <a className="Link" href={href} rel="noopener noreferrer" target={target}>
        {children}
      </a>
    );
  }
}