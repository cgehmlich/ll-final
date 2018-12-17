import React from 'react';
import { Card, CardImg, CardText, CardBody,
         CardTitle, CardSubtitle, Button } from 'reactstrap';
const Room = () => {
  return (
    <div>
      <Card>
        <CardImg top width="20%" src="https://img.youtube.com/vi/mv1XUyRqcGU/0.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Room;