import React from "react";
import styles from "@/styles/about.module.css";
import Post from "@/components/Post";

export default function About({posts}) {
  const val = 4;
  return (
    //One of the best usecase of css containerization. See Css file `about.module.css` for more details
    <div className={styles.main}>
      <h1 className={styles.headtext}>
        Rendered Through <span className="title">ServerSideProps</span> 
      </h1>

      {/* adding in page css which might be helpful in conditional css */}
      <style jsx>
        {`
          .title {
            color: ${val > 3 ? "Blue" : "lightpink"};
          }
        `}
      </style>
        
      <Post posts={posts} />
      
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    }
  };
};
