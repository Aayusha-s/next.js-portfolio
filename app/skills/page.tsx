'use client';
import {useState} from 'react';

export default function SkillsSection(){
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical Level</span>

            <div className="skills_container container grid">
                <div>
                    <div className="skills_content skills_open">
                        <div className="skills_header">
                            <i className="uil uil-brackets-curly skills_icon"></i>

                            <div>
                                <h1 className="skills_title">Frontend Developer</h1>
                                <span className="skills_subtitle">More than 1 year</span>
                            </div>

                            <i className="uil uil-angle-down skills_arrow"></i>
                        </div>

                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">HTML</h3>
                                    <span className="skills_number">90%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_html"></span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">CSS</h3>
                                <span className="skills_number">50%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_css"></span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">JavaScript</h3>
                                <span className="skills_number">10%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_js"></span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">React</h3>
                                <span className="skills_number">70%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_react"></span>
                            </div>
                        </div>
                    </div>

                    {/* SKill-2  */}

                    <div className="skills_content skills_close">
                        <div className="skills_header">
                            <i className="uil uil-server-network skills_icon"></i>

                            <div>
                                <h1 className="skills_title">Backend Developer</h1>
                                <span className="skills_subtitle">More than 1 year</span>
                            </div>

                            <i className="uil uil-angle-down skills_arrow"></i>
                        </div>

                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">Java</h3>
                                <span className="skills_number">90%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_java"></span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">Python</h3>
                                <span className="skills_number">65%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_python"></span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">Node JS</h3>
                                <span className="skills_number">55%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_node"></span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">PHP</h3>
                                <span className="skills_number">30%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_php"></span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* skills 3 */}
                <div>
                    <div className="skills_content skills_close ">
                        <div className="skills_header">
                            <i className="uil uil-swatchbook skills_icon"></i>

                            <div>
                                <h1 className="skills_title">Designer</h1>
                                <span className="skills_subtitle">More than 1 year</span>
                            </div>

                            <i className="uil uil-angle-down skills_arrow"></i>
                        </div>

                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">Figma</h3>
                                <span className="skills_number">90%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_figma"></span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">Sketch</h3>
                                <span className="skills_number">85%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_sketch"></span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                <h3 className="skills_name">Photoshop</h3>
                                <span className="skills_number">55%</span>
                                </div>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_photoshop"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}