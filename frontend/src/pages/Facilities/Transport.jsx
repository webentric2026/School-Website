import React from "react";
import {
    Bus,
    MapPinned,
    ShieldCheck,
    Clock3,
    Users,
} from "lucide-react";

import FacilitiesCommon from "./FacilitiiesCommon";
import Hero from "../../components/common/Hero";

const Transport = () => {
    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80",
            alt: "Modern school transport buses",
        },
        {
            image:
                "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1200&q=80",
            alt: "Students boarding school bus",
        },
        {
            image:
                "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
            alt: "Safe and comfortable school transportation",
        },
    ];

    const stat = {
        value: "30+",
        label: "GPS Enabled Buses",
        description:
            "A well-managed transportation network ensuring safe, timely, and comfortable travel for students across multiple routes.",
        icon: Bus,
    };

    const features = [
        {
            icon: MapPinned,
            title: "Wide Route Coverage",
            description:
                "Extensive transport routes covering nearby cities and residential areas for student convenience.",
        },
        {
            icon: ShieldCheck,
            title: "Safety First",
            description:
                "GPS tracking, CCTV surveillance, trained staff, and strict safety protocols for secure travel.",
        },
        {
            icon: Clock3,
            title: "Timely Transportation",
            description:
                "Efficient scheduling and punctual pickup/drop services to ensure smooth daily commutes.",
        },
        {
            icon: Users,
            title: "Experienced Staff",
            description:
                "Professional drivers and trained transport coordinators dedicated to student safety and comfort.",
        },
    ];

    return (
        <div className="bg-white">
            <Hero
                title="Safe & Smart Transport Facilities"
                subtitle="Our reliable transportation system ensures safe, comfortable, and timely travel for students through GPS-enabled buses, experienced staff, and well-planned transport routes."
                backgroundImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1800&q=80"
                breadcrumb="Facilities / Transport"
                buttonText="Explore Transport"
                buttonLink="#"
            />

            <FacilitiesCommon
                sectionLabel="World-Class Facilities"
                title="Safe & Reliable"
                titleAccent="School Transport"
                description="Our advanced school transportation system is designed to provide students with safe, efficient, and comfortable daily commuting experiences through modern buses, trained staff, GPS monitoring, and extensive route coverage."
                slides={slides}
                stat={stat}
                features={features}
                ctaLabel="Explore Transport Services"
                ctaHref="#"
                autoPlay={true}
                autoPlayMs={4000}
            />
        </div>
    );
};

export default Transport;