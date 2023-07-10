import React, {ReactNode, useEffect, useState} from "react";
import Head from "./head";
import GlobalStyle from "../styles/globalStyle";
import Footer from "./footer";
import Nav from "./nav";
import Loader from "./loader";


type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);

    if (loading) {
        return (
            <div>
                <Loader/>
            </div>
        );
    }

    return (
        <div>
            <Head/>
            <GlobalStyle/>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;