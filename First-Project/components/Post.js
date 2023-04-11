import styles from "../styles/post.module.css";

export default function Post({ posts }) {
  return (
    <div className={styles.postsContainer}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
            <h3 className={styles.titleText}>{post.title}</h3>
            <a className={styles.bodyText}>{post.body}</a>
        </div>        
      ))}
      {console.log(posts[0])}
    </div>
  );
}
