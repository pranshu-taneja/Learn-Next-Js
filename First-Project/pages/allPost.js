import React from "react";
import styles from "../styles/allPost.module.css";
import Meta from "@/components/Meta";

function allPost() {
  return (
    <>
      <Meta title='AllPost' />
      <div className={styles.main}></div>
    </>
  );
}

export default allPost;
