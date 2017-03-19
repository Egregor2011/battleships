import React from 'react';
import style from './header.css';

export default () => {
  return (
    <header className={style.header}>
      <div className={style.logo}></div>
      <div className={style.input}></div>
      <div className={style.button}></div>
      <div className={style.icn}></div>
      <div className={style['icn--last']}></div>
      <div className={style['icn--last']}></div>
    </header>
  );
};
