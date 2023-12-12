import React, {useState} from "react";
import {Row, Col, Container} from "react-bootstrap";

function TeamsPicker(props) {

    const [noOfTeams,
        setNoOfTeams] = useState();
    const [teams,
        setTeams] = useState([]);

    function changeNoOfTeams(event) {
        setNoOfTeams((event.target.value));
    }

    // console.log(noOfTeams);

    function generateClick() {
        const list = props.list;
        const shuffleArray = list.sort(() => Math.random() - 0.5);
        // console.log(shuffleArray)

        if (!noOfTeams || noOfTeams < 0) {
            setTeams([]);
        } else {
            const noOfPplInTeam = (shuffleArray.length / noOfTeams);
            // console.log(shuffleArray.length);
            const result = [];

            for (var i = 0; i < noOfTeams; i++) {
                result.push(shuffleArray.slice((i * noOfPplInTeam), ((i + 1) * noOfPplInTeam)));
            }
            setTeams(result);
            console.log(teams);
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto" className="no-of-teams">
                    <input className="number-box" type="number" onChange={changeNoOfTeams}/>
                    <span className="number-text">Chose number of teams</span>
                    <div className="btn-box btns">
                        <button className="btn" onClick={generateClick}>Generate!</button>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center teams-row">
                {teams.map((team, index) => {
                    return (
                        <Col className="team" md="auto" xs={2} key={index}>
                            {team.map((member, index) => {
                                return (
                                    <li key={index}>
                                        {member}
                                    </li>
                                )
                            })}
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default TeamsPicker;