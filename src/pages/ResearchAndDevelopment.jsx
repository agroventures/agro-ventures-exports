import React from 'react'
import useSEO from '../hooks/useSEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResearchHero from '../components/research-development/ResearchHero';
import ResearchOverview from '../components/research-development/ResearchOverview';
import ResearchProjects from '../components/research-development/ResearchProjects';

function ResearchAndDevelopment() {
    const url = window.location.href;

    useSEO({
        title: "Research and Development - Agro Ventures Exports",
        url,
        image_alt: "Research and Development",
        twitter_card: "summary_large_image",
    });

    return (
        <>
            <Navbar />
            <ResearchHero />
            <ResearchOverview />
            {/* <ResearchProjects /> */}
            <Footer />
        </>
    )
}

export default ResearchAndDevelopment
