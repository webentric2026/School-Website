import { useEffect } from "react";
import { images } from '../../data/images.js';
import AOS from "aos";
import "aos/dist/aos.css";

export default function PrincipalMessage() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
            `}</style>

            <section
                style={{
                    backgroundColor: "#EDECEA",
                    padding: "clamp(3rem, 6vw, 5.5rem) 0",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 clamp(1.25rem, 4vw, 3rem)",
                    }}
                >
                    {/* ── Grid ── */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "clamp(2.5rem, 5vw, 5rem)",
                            alignItems: "center",
                        }}
                    >

                        {/* ════ LEFT — Image Area ════ */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="900"
                            data-aos-delay="0"
                            style={{ position: "relative" }}
                        >
                            {/* Offset border frame */}
                            <div
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                                style={{
                                    position: "absolute",
                                    top: "18px",
                                    left: "18px",
                                    right: "-18px",
                                    bottom: "-18px",
                                    border: "2px solid #5C78C9",
                                    zIndex: 0,
                                }}
                            />

                            {/* Image wrapper */}
                            <div
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                    boxShadow: "6px 6px 28px rgba(44,42,42,0.18)",
                                    overflow: "hidden",
                                    lineHeight: 0,
                                }}
                            >
                                <img
                                    src={images.principal}
                                    alt="Principal Dr. K. Sharma at St. Andrews Academy campus"
                                    width={560}
                                    height={640}
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "clamp(380px, 52vw, 560px)",
                                        objectFit: "cover",
                                        objectPosition: "top center",
                                        display: "block",
                                    }}
                                />

                                {/* Bottom label strip */}
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay="400"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        backgroundColor: "rgba(20,18,18,0.72)",
                                        padding: "10px 16px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "block",
                                            width: "3px",
                                            height: "36px",
                                            backgroundColor: "#F2AB58",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <div>
                                        <div
                                            style={{
                                                color: "#fff",
                                                fontWeight: 700,
                                                fontSize: "0.95rem",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            Dr. K. Sharma
                                        </div>
                                        <div
                                            style={{
                                                color: "rgba(220,218,215,0.88)",
                                                fontSize: "0.75rem",
                                                marginTop: "8px",
                                            }}
                                        >
                                            Principal, St. Andrews International School
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ════ RIGHT — Content Area ════ */}
                        <div>

                            {/* Label */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="150"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "1.1rem",
                                }}
                            >
                                <span
                                    style={{
                                        display: "block",
                                        width: "28px",
                                        height: "2px",
                                        backgroundColor: "#5C78C9",
                                        flexShrink: 0,
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        color: "#5C78C9",
                                    }}
                                >
                                    Principal's Message
                                </span>
                            </div>

                            {/* Heading */}
                            <h2
                                data-aos="fade-down"
                                data-aos-duration="800"
                                data-aos-delay="220"
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "clamp(1.55rem, 2.6vw, 2.2rem)",
                                    fontWeight: 700,
                                    color: "#2C2A2A",
                                    lineHeight: 1.25,
                                    marginBottom: "1.6rem",
                                }}
                            >
                                A Commitment to Excellence and Character Building
                            </h2>

                            {/* Thin top rule */}
                            <div
                                data-aos="fade-down"
                                data-aos-duration="600"
                                data-aos-delay="300"
                                style={{
                                    height: "1px",
                                    backgroundColor: "rgba(44,42,42,0.12)",
                                    marginBottom: "1.6rem",
                                }}
                            />

                            {/* Paragraph 1 */}
                            <p
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="360"
                                style={{
                                    color: "#3e3c3a",
                                    fontSize: "clamp(0.875rem, 1.1vw, 0.96rem)",
                                    lineHeight: 1.82,
                                    fontWeight: 400,
                                    marginBottom: "1.05rem",
                                }}
                            >
                                Welcome to St. Andrews Academy. Our institution stands as a beacon of academic rigor and moral integrity. We believe that education extends far beyond the confines of a classroom; it is a profound journey of shaping character, instilling discipline, and nurturing a lifelong pursuit of knowledge.
                            </p>

                            {/* Paragraph 2 */}
                            <p
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="440"
                                style={{
                                    color: "#3e3c3a",
                                    fontSize: "clamp(0.875rem, 1.1vw, 0.96rem)",
                                    lineHeight: 1.82,
                                    fontWeight: 400,
                                }}
                            >
                                In an increasingly complex world, we are dedicated to providing a structured environment where students can thrive both intellectually and personally. Our dedicated faculty is committed to holistic development, ensuring that every student who walks through our doors is equipped not just with facts, but with the critical thinking skills, resilience, and ethical foundation necessary to navigate their future with purpose and distinction.
                            </p>

                            {/* Signature Area */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="540"
                                style={{ marginTop: "2.2rem" }}
                            >
                                <div
                                    style={{
                                        width: "40px",
                                        height: "2px",
                                        backgroundColor: "#F2AB58",
                                        marginBottom: "1rem",
                                    }}
                                />
                                <div
                                    style={{
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                        fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                                        fontWeight: 700,
                                        color: "#2C2A2A",
                                        marginBottom: "3px",
                                    }}
                                >
                                    Dr. K. Sharma
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.8rem",
                                        color: "#5C78C9",
                                        fontWeight: 500,
                                        letterSpacing: "0.03em",
                                    }}
                                >
                                    Principal, St. Andrews International School
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}