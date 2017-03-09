import React from 'react';
import style from './Counter.css'

export default () => {
  return (
      <div className={style.container}>
          <div className={style.user}>
              <div className={style.score}><span>00</span></div>
              <div className={style.player}>Player 1</div>
          </div>
          <div className={style.pc}>
              <div className={style.score}><span>00</span></div>
              <div className={style.player}>Player 2</div>
          </div>
      </div>
  )
};