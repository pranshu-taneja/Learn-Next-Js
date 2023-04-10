import React from "react";
import styles from "@/styles/about.module.css";

function about() {
  const val = 4;
  return (
    //One of the best usecase of css containerization. See Css file `about.module.css` for more details
    <div className={styles.main}>
      <h1 className={styles.headtext}>    
        <span className="title">Web Dev</span> News
      </h1>

      {/* adding in page css which might be helpful in conditional css */}
      <style jsx>
        {`
          .title {
            color: ${val > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
}

export default about;
