export default function QualificationSection() {
    return(
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Personal Journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button button--flex qualification_active" data-target="#education">
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>

                    <div className="qualification_button button--flex" data-target="#work">
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Work
                    </div>
                </div>

                
                <div className="qualification_sections">
                    {/* qualificationn content-1 */}
                    <div className="qualification_content qualification_active" data-content id="education">
                        {/* qualification 1 */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Computer Enginner</h3>
                                <span className="qualification_subtitle">Asia Pacific University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023-Present
                                </div>
                                
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        {/* QUALIFICATION 2  */}
                        
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification_title">Web Design </h3>
                                <span className="qualification_subtitle">Asia Pacific University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023-Present
                                </div>
                            </div>
                        </div>


                        {/* QUALIFICATION 3  */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Development</h3>
                                <span className="qualification_subtitle">Asia Pacific University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023-Present
                                </div>
                                
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION 4 */}
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Master in UI/UX</h3>
                                <span className="qualification_subtitle">Asia Pacific University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023-2025
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>


                    {/* qualification content-2 */}

                    <div className="qualification_content" data-content id="work">
                        {/* qualification 1 */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Software Enginner</h3>
                                <span className="qualification_subtitle">Microsoft-Peru</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016-2018
                                </div>
                                
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION 2 */}
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification_title">Fontend Design </h3>
                                <span className="qualification_subtitle">Asia Pacific University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023-Present
                                </div>
                            </div>
                        </div>


                        {/* QUALIFICATION 3  */}
                        <div className="qualification_data">
                            
                            <div>
                                <h3 className="qualification_title">UI deisgner</h3>
                                <span className="qualification_subtitle">Asia Pacific University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023-Present
                                </div>
                                
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}