//  _app.js is the top-level component which will be common across all the different pages. You can use this to add common layouts, or even persisting layout elements like sidebars and navigation bars.
// Best practice is to capitilize the first letter of all the components. and keep all letters small in pages folder.

//directly add fonts to the app from google just by name
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css"; //be careful about the naming globals.css is the one to go on the file name as well in folder structer too

//by this the these fonts will become default in your page
const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});

//Now this one is pretty obvious--> Here passing Components and PageProps cuz they are gonna be rendering on this page as being kind of root page.
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* This is the container for our webpabe and there is this classname which specifies the font as global all inside */}
      <main className={inter.className}>      
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
