import React from 'react';
//import firebase from 'context/firebase';
import { PageLayout} from 'components/common';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

const HomePage = () => {
    return (
        <PageLayout>
            <div className='container-fluid btn-group align-middle' style={{
                        position: 'absolute',
                        top: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'block'}}> 
            <Row>
                <Col>
                    <Link to="/voter">
                        <button type="button" className="btn btn-lg btn-block btn-primary xs-1 sm-1 col voter">
                            Voter Login 
                        </button>
                    </Link>
                </Col>
                <Col>
                    <Link to="/admin">
                        <button type="button" className="btn btn-lg btn-block btn-primary xs-1 sm-1 col admin">
                            Admin Login 
                        </button>
                    </Link>
                </Col>
            </Row>
            </div>
        </PageLayout>
    )
}

export { HomePage };