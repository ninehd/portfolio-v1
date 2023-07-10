import React from "react";
import {Helmet} from "react-helmet";
import favicon32 from "../images/favicon/favicon-32x32.png";
import favicon16 from "../images/favicon/favicon-16x16.png";
import faviconapple from "../images/favicon/favicon-16x16.png";
import faviconSafariSpin from "../images/favicon/safari-pinned-tab.svg";


const Head: React.FC = () => {
    return (
        <Helmet>
            <html lang="en"/>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>William Dhenin</title>
            <link rel="apple-touch-icon" sizes="180x180" href={faviconapple}/>
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
            <link rel="mask-icon" href={faviconSafariSpin} color="#5bbad5"/>
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