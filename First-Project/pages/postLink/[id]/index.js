import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/dindex.module.css";
import Meta from "@/components/Meta";

const URL = process.env.NEXT_PUBLIC_VERCEL_URL;

export default function Dindex({ data }) {
  //You will see this function fetching data from the homepage(while redirecting) and by the dynamic routes when refreshed page which can give you data of all api routes dynamically
  const router = useRouter();
  const { id } = router.query; // A simple way to get the id in the url
  // console.log(data);

  return (
    <>
      {/* See This is now dynamic meta tags AWESOME!! */}
      <Meta title={data.title} description={data.description}/>

      <div className={styles.main}>
        <div className={styles.post}>
          <p>This is the navigating page {id}</p>
          <h1>{data.title}</h1>
          <h3>{data.body}</h3>
          <Link className={styles.gBack} href="/">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
}

//------------------- Getting local Data from API (data.js) -------------------   uncomment it for better understanding and comment the gspa and gspr 
// export const getServerSideProps = async (context) => {
//   //This is the method to get the data from the server on runtime not on buildtime
//   const res = await fetch(`${URL}/api/articles/${context.params.id}`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
//------------------- Getting local Data from API (data.js) -------------------

//👇THese might not reflect as visual changes as these are related to performance rather than the data that is being rendered on the page
// Now you can use it to get all the data rather tahn the links provided on the page.
// Be careful while experimenting with the code below cuz it might also happen sometimes that the data might get served from the pages who redirected you to this one page (Maybe i built this functionality in those page accidently). You will recognize this on refreshing this dynamic page after being redirected.(break the code of gsp for this) --> (Although its working fine right now)

//------------------- Getting Data from Remote API But storing it static while build process  -------------------
export const getStaticProps = async (ctx) => {
  // This will get the data on buildtime and will save it.
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
    );
    const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  // This is the method to get the paths of the pages that we want to generate dynamically but only on buildtime
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  const id = data.map((data) => data.id);
  const paths = id.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
//------------------- Getting Data from Remote API But storing it static while build process  -------------------

//Important thing to know about get static path and get static props working (ofc they work together)
// 1. getStaticPaths is used to get the paths of the pages that we want to generate dynamically
// 2. getStaticProps is used to get the data of the page that we want to generate dynamically
// 3. So in the meantime/buildtime getStaticPaths will get the paths and generate id's whichever possible as according the API and getStaticProps will call the api for each id generated and fetch the data as per its defination/functionaltiy and get the data for each id and will serve later on being requested by user as a static page. SO that everything remains static.
