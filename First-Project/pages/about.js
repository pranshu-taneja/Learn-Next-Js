import React from "react";
import styles from "@/styles/about.module.css";
import Post from "@/components/Post";
import Meta from "@/components/Meta";

export default function About({ posts }) {
  const val = 4;
  return (
    //One of the best usecase of css containerization. See Css file `about.module.css` for more details
    <>
      {/* As you can see using Meta as a seperate component Gives a lot improvement in SEO */}
      <Meta title='About' />        

      
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
    </>
  );
}

// Remember You can't use next Export on build while using this gssp (btw its used to fetch data on each requested (not on build) )
export const getServerSideProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
