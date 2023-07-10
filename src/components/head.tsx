import React from "react";
import {Helmet} from "react-helmet";
import favicon32 from "../images/favicon/favicon-32x32.png";
import favicon16 from "../images/favicon/favicon-16x16.png";
import faviconapple from "../images/favicon/favicon-16x16.png";
import faviconSafariSpin from "../images/favicon/safari-pinned-tab.svg";
import {useLocation} from '@reach/router';
import {graphql, useStaticQuery} from "gatsby";


const Head = ({title, description, image}: { title?: string, description?: string, image?: string }) => {

    const {pathname} = useLocation();
    const {site} = useStaticQuery(
        graphql`
            query {
              site {
                siteMetadata {
                  defaultTitle: title
                  defaultDescription: description
                  twitterUsername
                  defaultImage: image
                  siteUrl
                }
              }
            }
  `);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata;


    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    }

    return (
        <Helmet>
            <html lang="en"/>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}/>
            <meta name="image" content={seo.image}/>
            <meta property="og:title" content={seo.title}/>
            <meta property="og:description" content={seo.description}/>
            <meta property="og:image" content={seo.image}/>
            <meta property="og:url" content={seo.url}/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={seo.title}/>
            <meta name="twitter:url" content={seo.url}/>
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.image}/>
            <meta name="twitter:creator" content={seo.twitterUsername}/>
            <meta name="keywords" content="engineer, backend, java, payments"/>
            <meta name="google-site-verification" content="lZL0emSWY_Oon0yv5ikk-0Gc1PZ0pmSqKev7YXtrDbA"/>
            <link rel="apple-touch-icon" sizes="180x180" href={faviconapple}/>
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
            <link rel="mask-icon" href={faviconSafariSpin} color="#272935"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,300&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

export default Head;