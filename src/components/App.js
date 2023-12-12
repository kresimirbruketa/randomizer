import React, {useState} from 'react';
import PeopleInput from './PeopleInput';
import TeamsPicker from './TeamsPicker';

import {Container} from 'react-bootstrap';

function App() {

    const [peopleList,
        setPeopleList] = useState([]);
    return (
        <section>
            <h2 className="heading">Team<span>Gen</span>
            </h2>

            <div className="application">
                
                    <Container className='app'>
                        <PeopleInput onTiping={setPeopleList}/>
                        <TeamsPicker list={peopleList}/>
                    </Container>
                
            </div>
        </section>

    );
}

export default App;