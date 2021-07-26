import React, { useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const AlbumsList = (props) => {
  useEffect(() => {
    console.log('in AlbumsList props.albums', props.albums);
  });

  return (
    <Container>
      <Row>
        {props.albums?.items?.map((album) => {
          return (
            <Col xs='3'>
              <div className='albums'>
                <Card key={album.id} style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={album.images[0].url} />
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text>Artist: {album.artists[0].name}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AlbumsList;
