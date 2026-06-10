import React from "react";
import {
    Building2,
    BedDouble,
    ShieldCheck,
    UtensilsCrossed,
    Users,
} from "lucide-react";

import FacilitiesCommon from "./FacilitiiesCommon";
import Hero from "../../components/common/Hero";

const Hostel = () => {
    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80",
            alt: "Modern school hostel building",
        },
        {
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
            alt: "Comfortable hostel rooms",
        },
        {
            image:
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
            alt: "Students in hostel common area",
        },
    ];

    const stat = {
        value: "24/7",
        label: "Student Care & Security",
        description:
            "A safe, secure, and nurturing residential environment with round-the-clock supervision and modern hostel amenities.",
        icon: Building2,
    };

    const features = [
        {
            icon: BedDouble,
            title: "Comfortable Accommodation",
            description:
                "Well-furnished and spacious hostel rooms designed for comfort, focus, and student well-being.",
        },
        {
            icon: ShieldCheck,
            title: "24/7 Security",
            description:
                "Secure campus environment with dedicated wardens, surveillance systems, and student support.",
        },
        {
            icon: UtensilsCrossed,
            title: "Healthy Dining Facilities",
            description:
                "Nutritious and hygienic meals prepared under strict quality and cleanliness standards.",
        },
        {
            icon: Users,
            title: "Community Living",
            description:
                "An engaging residential atmosphere that encourages friendship, discipline, collaboration, and personal growth.",
        },
    ];

    return (
        <div className="bg-white">
            <Hero
                title="Residential Hostel Facilities"
                subtitle="Our modern hostel facilities provide students with a safe, comfortable, and supportive residential environment that promotes academic focus, personal growth, and holistic development."
                backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1800&q=80"
                breadcrumb="Facilities / Hostel"
                buttonText="Explore Hostel"
                buttonLink="#"
            />

            <FacilitiesCommon
                sectionLabel="World-Class Facilities"
                title="Safe & Comfortable"
                titleAccent="Residential Hostel"
                description="Our thoughtfully designed hostel facilities offer students a secure and nurturing environment equipped with modern amenities, supervised care, hygienic dining, and comfortable accommodation to support both academic and personal development."
                slides={slides}
                stat={stat}
                features={features}
                ctaLabel="Explore Hostel Facilities"
                ctaHref="#"
                autoPlay={true}
                autoPlayMs={4000}
            />
        </div>
    );
};

export default Hostel;