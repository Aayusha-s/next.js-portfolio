export default function AboutSection() {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid">
                <img src="/images/cropped about.jpeg" alt="" className="about_img" />

                <div className="about_data">
                    <p className="about_description">
                        Passionate about Java and Python programming and exploring Spring Boot. I enjoy problem-solving, learning new technologies, and applying my knowledge to real-world software development challenges.
                    </p>

                    <div className="about_info">
                        <div>
                            <span className="about_info-title">08+</span>
                            <span className="about_info-name">Years <br /> experience</span>
                        </div>

                        <div>
                            <span className="about_info-title">10+</span>
                            <span className="about_info-name">Completed <br /> project</span>
                        </div>

                        <div>
                            <span className="about_info-title">05+</span>
                            <span className="about_info-name">Companies <br /> worked</span>
                        </div>
                    </div>

                    <div className="about_buttons">
                        <a download="CV.pdf" href="/pdf/CV.pdf" target="_blank" className="button button--flex">
                            Download CV <i className="uil uil-download-alt button_icon"></i>
                        </a>
                    </div>
                </div>


            </div>
        </section>
    )

}        