"use client"
import React from 'react';

import * as FeatherIconPack from 'react-feather'

const IconComponent = ({ type, settings }) => {
  return React.createElement(FeatherIconPack[type], settings);
}

const createNameForReactComponent = (string) => {
  return string[0].toUpperCase() + string.substring(1).replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace(/-/g, '');
};

export default function Icon({ type, className, size, stroke }) {


  // console.log('Icon:', createNameForReactComponent(type));

  const attributes = {
    className: className || '',
    strokeWidth: stroke || 2,
    color: "currentColor",
    size: size || 24
  }
  const iconName = type ? createNameForReactComponent(type) : 'Circle';

  return <IconComponent type={iconName} settings={attributes} /> 
}