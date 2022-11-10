import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

function Result() {
  return (
    <Alert key={'success'} variant="success">
      <h1>
        Example heading <Badge bg="success">56</Badge>
      </h1>
    </Alert>
  );
}

export {Result};
