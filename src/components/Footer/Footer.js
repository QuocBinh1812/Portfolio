import { Container, Row, Col } from 'react-bootstrap';

import logo from '~/assets/img/logo.svg';
import navIcon1 from '~/assets/img/nav-icon1.svg';
import navIcon2 from '~/assets/img/nav-icon2.svg';
import navIcon3 from '~/assets/img/github.svg';
import './Footer.scss';
import '~/components/Banner/Banner.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={12} className="text-center">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/cristi.binh" target="blank">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="https://github.com/QuocBinh1812" target="blank">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
