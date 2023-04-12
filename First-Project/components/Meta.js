// This is a component made up for Adding Head or different meta content for SEO for different Pages Which is super helpful
// The best part is its kind of dynamic we can change the values according to pages and dynamically for dynamic routes pages as well 
import Head from "next/head"

const Meta = ({title, description, keywords}) => {
  return (
    // You Can check or read them out from page source (ctrl+U)
     <Head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

//Default Props
Meta.defaultProps = {
  title: "WebDev News",
  description: "This page is about WebDev News",
  keywords: "web dev, Programmming, Frontend"
}

export default Meta