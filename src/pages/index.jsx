import React from 'react'
import LandingCarousel from '../assets/components/landing/carousel.jsx'
import AboutSection from '../assets/components/landing/about.jsx'
import NewOrder from '../assets/components/landing/newOrder.jsx'

function Home() {

    return (
        <>
            <LandingCarousel />
            <NewOrder />
            <AboutSection />
        </>
    )
}

export default Home