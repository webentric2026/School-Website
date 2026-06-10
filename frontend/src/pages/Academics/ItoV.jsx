import React from 'react'
import AcademicsCommon from './AcademicsCommon'
import Hero from '../../components/common/Hero'

const ItoV = () => {
    return (
        <div>
            <Hero
                title="Classes I to V"
                subtitle="Our primary curriculum encourages curiosity, creativity, and confidence through interactive learning experiences, strong academic foundations, and holistic child development."
                backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d?w=1800&q=80"
                breadcrumb="Academics / Classes I to V"
                buttonText="Explore Curriculum"
                buttonLink="#"
            />
            <AcademicsCommon
                sectionLabel="Primary School / Classes I to V"
                heading="Building Strong Foundations for Lifelong Learning"
                headingAccent="Foundations for Lifelong Learning"
                description="Our Classes I to V curriculum focuses on developing strong academic foundations, creativity, communication skills, and confidence through interactive learning, activity-based education, and a nurturing classroom environment."
                mainImage="https://images.unsplash.com/photo-1509062522246-3755977927d?w=900&q=80"
                mainImageAlt="Students learning in a modern primary classroom"
                secondaryImage="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&q=80"
                secondaryImageAlt="Children engaged in classroom activities"
                statValue="Classes I-V"
                statLabel="Foundational Learning Program"
                pillLabel="Interactive Curriculum"
                // features={DEFAULT_FEATURES}
                ctaLabel="Explore Curriculum"
                ctaHref="#"
            />
        </div>
    )
}

export default ItoV
