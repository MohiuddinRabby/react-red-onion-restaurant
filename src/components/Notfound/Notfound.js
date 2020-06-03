import React from 'react';
import { Alert, Card } from 'react-bootstrap';
/**
 * Notfound works if any component not found or route param not found
 */
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