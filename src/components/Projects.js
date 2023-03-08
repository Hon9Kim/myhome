import { Badge, Accordion } from 'react-bootstrap'
import GuGudan from './GuGudan.js'

function Projects() {
    return (
        <>
            <br/>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>구구단</Accordion.Header>
                    <GuGudan />
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>끝말잇기</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Projects