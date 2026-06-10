import React from "react";
import {
    FlaskConical,
    Microscope,
    Atom,
    ShieldCheck,
    Cpu,
} from "lucide-react";

import FacilitiesCommon from "./FacilitiiesCommon";
import Hero from "../../components/common/Hero";

const ScienceLabs = () => {
    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=1200&q=80",
            alt: "Modern science laboratory",
        },
        {
            image:
                "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80",
            alt: "Students conducting science experiments",
        },
        {
            image:
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
            alt: "Advanced laboratory equipment",
        },
    ];

    const stat = {
        value: "10+",
        label: "Advanced Laboratories",
        description:
            "Fully equipped physics, chemistry, biology, and computer science laboratories designed for experiential and research-based learning.",
        icon: FlaskConical,
    };

    const features = [
        {
            icon: Microscope,
            title: "Modern Lab Equipment",
            description:
                "Advanced instruments and scientific tools for hands-on practical learning experiences.",
        },
        {
            icon: Atom,
            title: "Practical-Based Learning",
            description:
                "Interactive experiments and scientific exploration to strengthen conceptual understanding.",
        },
        {
            icon: Cpu,
            title: "Technology Integration",
            description:
                "Smart laboratory systems and digital learning resources integrated into scientific education.",
        },
        {
            icon: ShieldCheck,
            title: "Safety & Supervision",
            description:
                "Strict laboratory safety standards with guided supervision from experienced faculty members.",
        },
    ];

    return (
        <div className="bg-white">
            <Hero
                title="Advanced Science Laboratories"
                subtitle="Our modern science laboratories inspire innovation, experimentation, and critical thinking through practical learning environments equipped with advanced scientific tools and technology."
                backgroundImage="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=1800&q=80"
                breadcrumb="Facilities / Science Labs"
                buttonText="Explore Laboratories"
                buttonLink="#"
            />

            <FacilitiesCommon
                sectionLabel="World-Class Facilities"
                title="Advanced Science &"
                titleAccent="Research Laboratories"
                description="Our state-of-the-art science laboratories provide students with immersive practical learning experiences in physics, chemistry, biology, and computer science, encouraging scientific curiosity, innovation, and analytical thinking."
                slides={slides}
                stat={stat}
                features={features}
                ctaLabel="Explore Laboratories"
                ctaHref="#"
                autoPlay={true}
                autoPlayMs={4000}
            />
        </div>
    );
};

export default ScienceLabs;