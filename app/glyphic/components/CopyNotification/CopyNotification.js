'use client'
import { useContext, useEffect } from 'react';
import { store } from '@/app/glyphic/context/store.js';

import { Wrapper } from '@/components';

import './CopyNotification.scss';



export const CopyNotification = () => {
  const { state, dispatch } = useContext(store);

  const { isCopied, copiedElement } = state;

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        dispatch({ type: 'set copied', value: false });
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCopied])

  const NotificationContent = () => {
    return (
      <Wrapper className="Notification-container">
        <div className="Notification-content">
          Copied <Glyph type={copiedElement} /> element to clipboard 
        </div> 
      </Wrapper>
    )
  }

  return (
    <div className="Notification">
      {isCopied && <NotificationContent />}
    </div>
  );
};


const Glyph = ({ type }) => {
  return <div className="glyph">{type || '↑'}</div>;
};