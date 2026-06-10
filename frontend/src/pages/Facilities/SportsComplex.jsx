import React from "react";
import {
    Trophy,
    Dumbbell,
    Goal,
    ShieldCheck,
    Users,
} from "lucide-react";

import FacilitiesCommon from "./FacilitiiesCommon";
import Hero from "../../components/common/Hero";

const SportsComplex = () => {
    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
            alt: "Modern school sports ground",
        },
        {
            image:
                "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
            alt: "Students playing basketball",
        },
        {
            image:
                "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
            alt: "School football training session",
        },
    ];

    const stat = {
        value: "15+",
        label: "Sports Activities",
        description:
            "Comprehensive indoor and outdoor sports programs designed to develop teamwork, discipline, leadership, and physical fitness.",
        icon: Trophy,
    };

    const features = [
        {
            icon: Dumbbell,
            title: "Fitness Training",
            description:
                "Modern fitness and conditioning programs guided by experienced trainers and coaches.",
        },
        {
            icon: Goal,
            title: "Indoor & Outdoor Sports",
            description:
                "Facilities for football, basketball, cricket, badminton, athletics, and more.",
        },
        {
            icon: Users,
            title: "Professional Coaching",
            description:
                "Expert coaching programs focused on skill development and competitive excellence.",
        },
        {
            icon: ShieldCheck,
            title: "Safe Sports Environment",
            description:
                "Well-maintained infrastructure with safety-focused sports supervision and support.",
        },
    ];

    return (
        <div className="bg-white">
            <Hero
                title="Sports Complex & Athletic Facilities"
                subtitle="Our world-class sports complex promotes physical fitness, teamwork, discipline, and leadership through modern infrastructure, professional coaching, and diverse athletic programs."
                backgroundImage="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1800&q=80"
                breadcrumb="Facilities / Sports Complex"
                buttonText="Explore Sports"
                buttonLink="#"
            />

            <FacilitiesCommon
                sectionLabel="World-Class Facilities"
                title="Modern Sports &"
                titleAccent="Athletic Complex"
                description="Our state-of-the-art sports complex provides students with exceptional indoor and outdoor facilities designed to encourage physical excellence, teamwork, confidence, and holistic development."
                slides={slides}
                stat={stat}
                features={features}
                ctaLabel="Explore Sports Facilities"
                ctaHref="#"
                autoPlay={true}
                autoPlayMs={4000}
            />
        </div>
    );
};

export default SportsComplex;
