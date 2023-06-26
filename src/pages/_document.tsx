import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            {/* fonte Barlow 400, 600, 700 */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&family=Passion+One:wght@700&display=swap" rel="stylesheet" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
