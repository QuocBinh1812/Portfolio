import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

import projImg2 from '~/assets/img/healthy.png';
import projImg1 from '~/assets/img/booking.png';
import projImg3 from '~/assets/img/musicApp.png';
import projImg4 from '~/assets/img/Sneaker.png';
import projImg5 from '~/assets/img/BBQ.png';
import colorSharp2 from '~/assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.scss';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            title: 'Tix',
            description: 'booking ticket movie',
            imgUrl: projImg1,
            linkDemo: 'https://booking-movie-full.vercel.app/',
        },
        {
            title: 'Healthy',
            description: 'Design & Development',
            imgUrl: projImg2,
            linkDemo: 'https://healthy-gray.vercel.app/',
        },
        {
            title: 'Spotify',
            description: 'Music app',
            imgUrl: projImg3,
            linkDemo: 'https://musicapp-virid.vercel.app/',
        },
        {
            title: 'Sneaker',
            description: 'Shopping card',
            imgUrl: projImg4,
            linkDemo: 'https://g-sneaker-liard.vercel.app/',
        },
        {
            title: 'BBQ restaurant',
            description: 'HTML,CSS,JAVASCRIPT',
            imgUrl: projImg5,
            linkDemo: 'https://quocbinh1812.github.io/SUM-BBQ/',
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <h2>{t('projects')}</h2>
                                    <p>{t('title-project')}</p>
                                    <p>
                                        {t('title-sub-project')}{' '}
                                        <a href="https://github.com/QuocBinh1812" target="blank">
                                            GitHub
                                        </a>
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return <ProjectCard key={index} {...project} />;
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Comming soon ...</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Comming soon ...</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
