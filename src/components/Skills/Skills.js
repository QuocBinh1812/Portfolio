import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '~/assets/img/color-sharp.png';
import './Skills.scss';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
    const { t } = useTranslation();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>{t('skills')}</h2>
                            <p>{t('title-skill')}</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img
                                        src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                                        alt="Image"
                                    />
                                    <h5>HTML / CSS / SCSS</h5>
                                </div>
                                <div className="item">
                                    <img
                                        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                                        alt="Image"
                                    />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img
                                        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                                        alt="Image"
                                    />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img
                                        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                                        alt="Image"
                                    />
                                    <h5>NodeJs</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
