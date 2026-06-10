import React from 'react'
import AboutHero from './AboutHero'
import SchoolIntrodcution from './SchoolIntrodcution'
import Vision from './Vision'
import PrincipalMessage from '../../components/home/PrincipalMessage'
import WhyChooseUs from './WhyChooseUs'
import Faculty from './Faculty'
import ContactCTA from '../../components/ContactCTA'

const AboutMain = () => {
    return (
        <div>
            <AboutHero />
            <SchoolIntrodcution />
            <PrincipalMessage />
            <Vision />
            <WhyChooseUs />
            <Faculty />
            <ContactCTA />
        </div>
    )
}

export default AboutMain
