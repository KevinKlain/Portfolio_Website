import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, Tab, TabContent, TabPane } from "react-bootstrap";

const Projects = () => {
    
    const projects = [
        {
            title: "WeatherApp",
            description: "Front/Backend Development",
            imgURL: ""
        },
        {
            title: "FakeShop",
            description: "Front/Backend Development",
            imgURL: ""
        },
        {
            title: "NoteApp",
            description: "Front/Backend Development",
            imgURL: ""
        },
        {
            title: "PortfolioWebsite",
            description: "Front/Backend Development",
            imgURL: ""
        },
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>sadhfölsadhflsadfhlaskdhaskldfhjaslkdfjhasd</p>
                        <Tab.Container id="projects.tabs" defaultActiveKey='first'>
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <p>{project.title}</p>
                                            );
                                        })
                                    }   
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>Loren Ipsum</Tab.Pane>
                            <Tab.Pane eventKey='third'>Loren Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;