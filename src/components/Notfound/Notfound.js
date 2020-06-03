import React from 'react';
import { Alert, Card } from 'react-bootstrap';

const Notfound = () => {
    return (
        <div>
            <Alert variant="danger">
                <Card>
                    <Card.Body>
                        <Card.Text>Page Not Found!!</Card.Text>
                    </Card.Body>
                </Card>
            </Alert>
        </div>
    );
};

export default Notfound;