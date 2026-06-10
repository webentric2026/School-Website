import React from 'react'
import AcademicsCommon from './AcademicsCommon'
import Hero from '../../components/common/Hero'

const VItoX = () => {
    return (
        <div>
            <Hero
                title="Classes VI to X"
                subtitle="Our middle and secondary school program empowers students with academic excellence, critical thinking, leadership skills, and holistic development to prepare them for future challenges."
                backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=80"
                breadcrumb="Academics / Classes VI to X"
                buttonText="Explore Academics"
                buttonLink="#"
            />

            <AcademicsCommon
                sectionLabel="Secondary School / Classes VI to X"
                heading="Shaping Future Leaders Through Academic Excellence"
                headingAccent="Academic Excellence"
                description="Our Classes VI to X curriculum is designed to strengthen conceptual understanding, analytical thinking, communication skills, and personal growth through modern teaching methods, practical learning, and co-curricular engagement."
                mainImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
                mainImageAlt="Secondary school students engaged in classroom learning"
                secondaryImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
                secondaryImageAlt="Students collaborating on academic activities"
                statValue="VI-X"
                statLabel="Comprehensive Academic Program"
                pillLabel="CBSE Curriculum"
                // features={DEFAULT_FEATURES}
                ctaLabel="Explore Academics"
                ctaHref="#"
            />

        </div>
    )
}

export default VItoX
