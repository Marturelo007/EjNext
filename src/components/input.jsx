import React, { useState, useRef } from 'react';
import styles from './input.module.css';
import Button from './button';
const InputGroup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Sign In to your account</div>
      <form className={styles.form} action="">
        <div className={styles.inputField}>
          <input
            required
            autoComplete="off"
            type="text"
            name="text"
            id="username"
          />
          <label htmlFor="username">Full Name</label>
        </div>
        <div className={styles.inputField}>
          <input
            required
            autoComplete="off"
            type="password"
            name="text"
            id="password"
          />
          <label htmlFor="password">Password</label>
        </div>
      <Button></Button>
      </form>
    </div>
  );
};

export default InputGroup;
