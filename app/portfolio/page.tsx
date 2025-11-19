'use client'



export default function PortfolioSection() {

    const handleNext = () => {
        console.log('Next button clicked');
    }

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">My Recent Works</span>

            <div className="portfolio_container container swiper mySwiper">
                <div className="swiper-wrapper">
                    {/* portfolio 1 */}
                    <div className="portfolio_content grid swiper-slide">
                        <img src="/images/portfolio1.jpg" alt="" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Library Management System</h3>
                            <p className="portfolio_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum necessitatibus, fuga voluptatibus eligendi vero labore, asperiores dolorum aspernatur, quam accusamus recusandae nisi ad repudiandae beatae repellat odit facere animi libero.</p>
                            <a href="#" className="button button--flex button--small portfolio_button">
                                Demo
                                <i className="uil uil-arrow-right button_icon"></i>
                            </a>

                        </div>
                    </div>

                    {/* portfolio 2  */}
                    <div className="portfolio_content grid swiper-slide">
                        <img src="/images/portfolio2.jpg" alt="" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Bank Management System</h3>
                            <p className="portfolio_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum necessitatibus, fuga voluptatibus eligendi vero labore, asperiores dolorum aspernatur, quam accusamus recusandae nisi ad repudiandae beatae repellat odit facere animi libero.</p>
                            <a href="#" className="button button--flex button--small portfolio_button">
                                Demo
                                <i className="uil uil-arrow-right button_icon"></i>
                            </a>

                        </div>
                    </div>

                    {/* portfolio 3 */}
                    <div className="portfolio_content grid swiper-slide">
                        <img src="/images/portfolio3.jpg" alt="" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Recipe Finds</h3>
                            <p className="portfolio_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum necessitatibus, fuga voluptatibus eligendi vero labore, asperiores dolorum aspernatur, quam accusamus recusandae nisi ad repudiandae beatae repellat odit facere animi libero.</p>
                            <a href="#" className="button button--flex button--small portfolio_button">
                                Demo
                                <i className="uil uil-arrow-right button_icon"></i>
                            </a>

                        </div>
                    </div>
                </div>

                {/* arrows */}
                <div className="swiper-button-next" onClick={handleNext}>
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>

                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>

                {/* pagination */}
                <div className="swiper-pagination"></div>

            </div>
        </section>
    )
}