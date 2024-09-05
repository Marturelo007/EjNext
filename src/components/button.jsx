"use client"
import styles from './button.module.css';
import React from "react";
export default function Button(props) {
    
    return (
      /* From Uiverse.io by zaeniahmad-id */ 
<div className={styles.card}>
  <a>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet" className={styles.socialSvg}>
      <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path d="M800 1931 c-290 -64 -522 -247 -659 -518 -35 -70 -75 -201 -86 -280 l-7 -53 541 0 c298 0 541 3 541 8 0 4 -67 75 -150 157 -138 137 -150 153 -150 186 0 46 33 79 80 79 32 0 55 -20 272 -238 219 -218 238 -240 238 -272 0 -32 -19 -54 -238 -272 -221 -221 -240 -238 -273 -238 -46 0 -79 33 -79 81 0 31 14 48 141 174 77 77 145 148 150 158 9 16 -19 17 -532 17 l-541 0 6 -47 c54 -379 334 -695 706 -795 73 -20 108 -23 245 -22 144 0 169 3 250 28 189 57 356 165 474 308 75 89 164 264 192 373 126 498 -167 1004 -666 1151 -124 36 -329 43 -455 15z"/>
      </g>
</svg>
    <svg className={styles.socialSvg} viewBox="0 0 16 16">
      <path
        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
      ></path>
    </svg>
  </a>
</div>
    );
  };
;