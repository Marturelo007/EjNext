"use client";
import React from "react";
import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.container}>
    <div className={styles.spinner}>
      <div className={styles.inner}></div>
    </div>
  </div>
);

export default Spinner;
