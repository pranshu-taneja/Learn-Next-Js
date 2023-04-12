// This page is used as the / routes (home page tbh)

import Head from "next/head";
// import Image from 'next/image'

// importing style sheet from styles here
import styles from "@/styles/index.module.css"; 
import Post from "@/components/Post";

export default function Home({posts}) {
  
  return (
    <>
      <Head>
        <title>My First Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* This is how you apply style in the element styles._name_ */}
      <main className={styles.main}>
        <h1>Rendered Data through <span className="cText">GetStaticProps</span></h1>
        <Post posts={posts}/>
      </main>

      <style jsx>
        {
          `
            .cText{
              color: darkRed;
            }
          `
        }
      </style>
    </>
  );
}

// Get static props is used to fetch data from the server at the build time
export const getStaticProps = async()=>{        
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const posts = await res.json();
  
  return{
    props:{
      posts
    }
  }
}

