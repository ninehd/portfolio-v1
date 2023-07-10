import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";
import Resume from "../components/sections/resume";
import Contact from "../components/sections/contact";

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
