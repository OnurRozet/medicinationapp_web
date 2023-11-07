import { Inter } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Script from 'next/script';
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
></link>;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
         <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      </Head>
     
      <body className={inter.className}>
        {children}
        <ToastContainer autoClose="1500" />
        <Script id='my-scripts' src='https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'/>
        <Script id='my-scripts' src='https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'/>
        <Script id='my-scripts' src='https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js'/>
      </body>
   
    </html>
  );
}
