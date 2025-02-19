import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google"; // https://fonts.google.com/


export const metadata = {
  title: 'Not Found Project',
  description: 'Proyecto creado con Next.js',
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
