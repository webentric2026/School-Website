import React from 'react'
import AcademicsCommon from './AcademicsCommon'
import Hero from '../../components/common/Hero'

const CommerceStream = () => {
    return (
        <div>
            <Hero
                title="Commerce Stream"
                subtitle="Our Commerce Stream develops analytical thinking, financial literacy, business understanding, and entrepreneurial skills to prepare students for successful careers in commerce, management, finance, and economics."
                backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&q=80"
                breadcrumb="Academics / Commerce Stream"
                buttonText="Explore Commerce"
                buttonLink="#"
            />

            <AcademicsCommon
                sectionLabel="Senior Secondary / Commerce Stream"
                heading="Preparing Future Business Leaders and Entrepreneurs"
                headingAccent="Business Leaders and Entrepreneurs"
                description="The Commerce Stream curriculum combines academic excellence with practical business knowledge, helping students develop strong foundations in finance, accounting, economics, business studies, and real-world decision-making skills."
                mainImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&q=80"
                mainImageAlt="Commerce students engaged in collaborative business learning"
                secondaryImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80"
                secondaryImageAlt="Students discussing business and commerce concepts"
                statValue="XI-XII"
                statLabel="Commerce & Business Education"
                pillLabel="Future-Ready Curriculum"
                // features={DEFAULT_FEATURES}
                ctaLabel="Explore Commerce"
                ctaHref="#"
            />
        </div>
    )
}

export default CommerceStream
