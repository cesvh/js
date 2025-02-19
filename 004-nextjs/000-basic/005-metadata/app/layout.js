import Header from "../components/Header";
import Navbar from "../components/Navbar";


export const metadata = {
  title: 'Metadatas',
  description: 'Proyecto creado con Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <Header />
            <Navbar />
            {children}
        </body>
    </html>
  )
}
