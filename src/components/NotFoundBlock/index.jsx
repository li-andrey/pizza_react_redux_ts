import React from "react";
import styles from "./notFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>Таокой страницы не существует</h1>
    </div>
  );
}

export default NotFoundBlock;
