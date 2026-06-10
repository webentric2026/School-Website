import React from 'react'
import AcademicsCommon from './AcademicsCommon'
import Hero from '../../components/common/Hero'

const ScienceStream = () => {
    return (
        <div>

            <Hero
                title="Science Stream"
                subtitle="Our Science Stream program equips students with strong conceptual knowledge, analytical thinking, practical exposure, and research-oriented learning to prepare them for engineering, medical, and emerging scientific careers."
                backgroundImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1800&q=80"
                breadcrumb="Academics / Science Stream"
                buttonText="Explore Science Programs"
                buttonLink="#"
            />

            <AcademicsCommon
                sectionLabel="Senior Secondary / Science Stream"
                heading="Empowering Innovators Through Advanced Scientific Learning"
                headingAccent="Advanced Scientific Learning"
                description="The Science Stream curriculum is designed to provide students with deep conceptual understanding, laboratory experience, problem-solving abilities, and competitive exam readiness through modern teaching methodologies and practical exploration."
                mainImage="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80"
                mainImageAlt="Students performing science laboratory experiments"
                secondaryImage="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80"
                secondaryImageAlt="Science students collaborating in laboratory"
                statValue="PCM / PCB"
                statLabel="Advanced Science Curriculum"
                pillLabel="NEET & JEE Focused"
                // features={DEFAULT_FEATURES}
                ctaLabel="Explore Science Stream"
                ctaHref="#"
            />

        </div>
    )
}

export default ScienceStream
