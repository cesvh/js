// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import "./Globals.css"

import { Roboto } from "next/font/google"; // https://fonts.google.com/


export const metadata = {
  title: 'Lux Project',
  description: 'Lux project, my personal web page',
}

const roboto = Roboto({
    weight: ["300", "500"],
    styles: ["italic"],
    subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={ roboto.className }>
            <Header />
            <Navbar />
            {children}
        </body>
    </html>
  )
}
