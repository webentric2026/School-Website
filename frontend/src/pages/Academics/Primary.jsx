import React from 'react'
import AcademicsCommon from './AcademicsCommon'
import Hero from '../../components/common/Hero'

const Primary = () => {
    return (
        <div>
            <Hero
                title="Primary School Education"
                subtitle="Our primary school program nurtures curiosity, creativity, and confidence through interactive learning, experienced educators, and a safe, engaging environment designed for holistic child development."
                backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d?w=1800&q=80"
                breadcrumb="Academics / Primary School"
                buttonText="Explore Programs"
                buttonLink="/contact"
            />
            <AcademicsCommon />
        </div>
    )
}

export default Primary
