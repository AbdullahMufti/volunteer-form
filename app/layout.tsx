import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Nastaliq_Urdu({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Friends of Al-Mawrid Registration Form",
  description: "Fill this form to become a friend of Al-Mawrid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Title = "Friends of Al-Mawrid Registration Form";
  const Description = "Fill this form to become a friend of Al-Mawrid";
  const ImageLink = "https://friends.almawrid.org/society.jpeg";
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={Description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://friends.almawrid.org" />
        <meta property="og:image" content={ImageLink} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
        <meta name="twitter:image" content={ImageLink} />

        <meta property="og:site_name" content="Al-Mawrid Friends" />
        <meta property="og:locale" content="en_US" />

        <meta name="whatsapp:title" content={Title} />
        <meta name="whatsapp:description" content={Description} />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '558375960276599');fbq('track', 'PageView');`,
          }}
        />
      </head>
      <body className={noto.className}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=558375960276599&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
