import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import PrincipalMessage from '../components/home/PrincipalMessage'
import Facilities from '../components/home/Facilities'
import Activities from '../components/home/Activities'
import GalleryPreview from '../components/home/GalleryPreview'
import Achievements from '../components/home/Achievements'
import FeaturedNotices from '../components/home/FeaturedNotices'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <PrincipalMessage />
            <Facilities />
            <Achievements />
            <Activities />
            <GalleryPreview />
            <FeaturedNotices />
            <Testimonials />
        </div>
    )
}

export default Home
