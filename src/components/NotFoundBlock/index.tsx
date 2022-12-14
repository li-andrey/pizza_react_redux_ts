import React from "react";
import styles from "./notFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Таокой страницы не существует
        ААААААААААААААААААААААААААААА
      </h1>
    </div>
  );
}

export default NotFoundBlock;
