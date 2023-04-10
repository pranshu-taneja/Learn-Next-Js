// The _document.js file in Next.js is used to customize the HTML document that is rendered for each page of your application. It allows you to add custom scripts, stylesheets, meta tags, or other elements to the <head> or <body> of the HTML document, and it is useful for implementing things like global styles, SEO optimizations, or third-party libraries that need to be loaded on every page. 
import { Html, Head, Main, NextScript } from 'next/document'    

export default function Document() {
  return (
    // Here changing for change in meta description for SEO 
    <Html lang="ru">      
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


