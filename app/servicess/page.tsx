'use client';
import { useState } from "react";

export default function ServicesSection(){

    const [activeModal, setActiveModal] = useState<string | null>(null)
    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I Offer</span>

            <div className="services_container container grid">
                {/* SERVICE 1 */}
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">UI/UX<br/>Designer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button">
                        View More
                        <i className="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className="services_modal">
                        <div className="services_modal-content ">
                            <h4 className="services_modal-title">UI/UX <br/>Designer</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web Page Developement.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I create UX element interactions. </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* SERVICE 2 */}
                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Frontend<br/>Developer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button">
                        View More
                        <i className="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Frontend <br/>Developer</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web Page Developement.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I create UX element interactions. </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*   SERVICES 3 */}
                <div className="services_content">
                    <div>
                        <i className="uil uil-pen services_icon"></i>
                        <h3 className="services_title">Backend<br/>Developer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button">
                        View More
                        <i className="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Backend <br/>Developer</h4>
                            <i className="uil uil-times services_modal-close"></i>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web Page Developement.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I create UX element interactions. </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}