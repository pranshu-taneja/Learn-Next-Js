import styles from "../styles/post.module.css";
import Link from "next/link";

export default function Post({ posts }) {
  return (
    <div className={styles.postsContainer}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <Link className={styles.Link} href={"/postLink/[id]"} as={`/postLink/${post.id}`}>
            <h3 className={styles.titleText}>{post.title}</h3>
            <p className={styles.bodyText}>{post.body}</p>
          </Link>
        </div>
      ))}
      {/* {console.log(posts[0])} */}
    </div>
  );
}


