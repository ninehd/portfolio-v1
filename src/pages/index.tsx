import * as React from "react"
import {HeadFC} from "gatsby";
import {About, Contact, Hero, Layout, Resume, Seo, Skills} from '../components';

const IndexPage = () => (
    <Layout>
        <Hero/>
        <About/>
        <Resume/>
        <Skills/>
        <Contact/>
    </Layout>
);
export default IndexPage
export const Head: HeadFC = () => <Seo/>