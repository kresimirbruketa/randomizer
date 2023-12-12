import React from "react";
import {Row, Col, Container} from "react-bootstrap";

function PeopleInput(props) {

    function importName(event) {

        const listString = event.target.value;

        const trimmedList = listString.split(",")

        props.onTiping(trimmedList)
        // console.log(event.target.value)

    }

    return (
        <div className="textarea-field">
            <Container >
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <form>
                            <textarea
                                type="text"
                                className="input-box"
                                onChange={importName}
                                placeholder="Type Names, exmpl. KB,MS,..."
                                />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PeopleInput;