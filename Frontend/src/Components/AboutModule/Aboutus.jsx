import React from "react";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import styles from "./Aboutus.module.css";
import Footer from "./Footer";

const Aboutus = () => {
    return (
        <>
            <NavBar />
            <div className={styles.aboutUsContainer}>
                <div className={styles.container}>
                    <h1 className={styles.headingGradient}>
                        WallGodds: Minimal by Design, Inspired by You
                    </h1>
                    <p className={styles.description}>
                        WallGodds is an open-source wallpaper project that
                        fosters collaboration between developers and designers
                        to create a dynamic platform for wallpapers. With a
                        seamless blend of creativity and technology, WallGodds
                        delivers an immersive experience for those who
                        appreciate exceptional visual aesthetics.
                        <br />
                        Developers can contribute by enhancing the platform’s
                        functionality, optimizing performance, and introducing
                        innovative features, while designers can showcase their
                        creativity by submitting stunning wallpapers for a
                        global audience. With a focus on minimalism and user
                        experience, WallGodds provides an open and collaborative
                        environment where art and technology converge.
                    </p>

                    <div className={styles.section}>
                        <img
                            src="mission.png"
                            alt="Our Mission"
                            className={styles.image}
                        />
                        <div className={styles.textContainer}>
                            <h2 className={styles.gradientHeading}>
                                Our Mission
                            </h2>
                            <p className={styles.text}>
                                At WallGodds, we strive to make digital art
                                easily accessible to everyone. Our platform
                                allows users to effortlessly discover wallpapers
                                while giving designers a dedicated space to
                                share their creativity. With a focus on
                                simplicity, efficiency, and inclusivity, we
                                create a seamless browsing experience across all
                                devices. Through open-source collaboration, we
                                foster a community that values innovation and
                                user-centric design.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.section} ${styles.reverse}`}>
                        <img
                            src="inspiration.png"
                            alt="Our Inspiration"
                            className={styles.image}
                        />
                        <div className={styles.textContainer}>
                            <h2 className={styles.gradientHeading}>
                                Our Inspiration
                            </h2>
                            <p className={styles.text}>
                                Inspired by simplicity, efficiency, and
                                inclusivity, WallGodds is built with a clean and
                                functional design. Our goal is to offer a smooth
                                browsing experience while fostering a growing
                                community of designers, developers, and
                                enthusiasts who bring unique creativity to the
                                platform.
                            </p>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <img
                            src="core-values.png"
                            alt="Core Values"
                            className={styles.image}
                        />
                        <div className={styles.textContainer}>
                            <h2 className={styles.gradientHeading}>
                                Core Values
                            </h2>
                            <p className={styles.text}>
                                WallGodds values creativity, user-centric
                                design, and open collaboration. We prioritize
                                high-quality wallpapers, seamless performance,
                                and an engaging community-driven approach.
                                Recognizing and supporting contributors is at
                                the heart of our platform, ensuring their work
                                is appreciated and celebrated.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.section} ${styles.reverse}`}>
                        <img
                            src="milestone.png"
                            alt="Milestone & Growth"
                            className={styles.image}
                        />
                        <div className={styles.textContainer}>
                            <h2 className={styles.gradientHeading}>
                                Milestone & Growth
                            </h2>
                            <p className={styles.text}>
                                WallGodds has achieved significant milestones,
                                including acceptance into Winter of Code 4.0,
                                JWOC, and Apertre 2.0. As our community expands,
                                we remain committed to enhancing contributor
                                recognition and optimizing the user experience.
                                Through continuous improvements driven by user
                                feedback, we prioritize design, performance,
                                security, and scalability to ensure a robust and
                                evolving platform.
                            </p>
                        </div>
                    </div>

                    <h2 className={styles.joinTitle}>Join Our Community</h2>
                    <div className={styles.socialIcons}>
                        <a
                            href="https://discord.gg/kTQ5KWANp8"
                            className={styles.icon}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="discord-icon.png" alt="Discord" />
                        </a>
                        <a
                            href="https://github.com/Parnab03/WallGodds"
                            className={styles.icon}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="github-icon.png" alt="GitHub" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/wallgodds/"
                            className={styles.icon}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="linkedin-icon.png" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Aboutus;
