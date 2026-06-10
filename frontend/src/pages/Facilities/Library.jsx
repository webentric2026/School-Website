import React from "react";
import {
    Library,
    BookOpen,
    Monitor,
    Users,
    Search,
} from "lucide-react";

import FacilitiesCommon from "./FacilitiiesCommon";
import Hero from "../../components/common/Hero";

const LibraryPage = () => {
    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80",
            alt: "Modern school library interior",
        },
        {
            image:
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80",
            alt: "Students studying in library",
        },
        {
            image:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80",
            alt: "Library bookshelves and reading area",
        },
    ];

    const stat = {
        value: "50,000+",
        label: "Learning Resources",
        description:
            "A vast collection of books, journals, e-books, and digital academic materials for comprehensive student learning.",
        icon: Library,
    };

    const features = [
        {
            icon: BookOpen,
            title: "Digital Archives",
            description:
                "Access to academic journals, e-books, and digital research resources.",
        },
        {
            icon: Monitor,
            title: "Smart Learning Zones",
            description:
                "Technology-enabled reading and collaborative study spaces.",
        },
        {
            icon: Users,
            title: "Collaborative Spaces",
            description:
                "Interactive discussion and group learning environments for students.",
        },
        {
            icon: Search,
            title: "Research Assistance",
            description:
                "Guidance and support for academic projects and independent research.",
        },
    ];

    return (
        <div className="bg-white">
            <Hero
                title="Modern Library & Resource Center"
                subtitle="Our world-class library nurtures curiosity, research, and lifelong learning through extensive academic resources, digital archives, collaborative study spaces, and technology-enabled learning environments."
                backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1800&q=80"
                breadcrumb="Facilities / Library"
                buttonText="Explore Library"
                buttonLink="#"
            />

            <FacilitiesCommon
                sectionLabel="World-Class Facilities"
                title="Modern Library &"
                titleAccent="Learning Resource Center"
                description="Our modern library provides students with access to an extensive collection of books, digital resources, research materials, and collaborative learning spaces designed to inspire curiosity, critical thinking, and academic excellence."
                slides={slides}
                stat={stat}
                features={features}
                ctaLabel="Explore Library"
                ctaHref="#"
                autoPlay={true}
                autoPlayMs={4000}
            />
        </div>
    );
};

export default LibraryPage;