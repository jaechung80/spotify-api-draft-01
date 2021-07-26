import React, { useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const TracksList = (props) => {
  useEffect(() => {
    console.log('in TracksList props.tracks', props.tracks);
  });

  return (
    <Container>
      <Row>
        {props.tracks?.items?.map((track) => {
          return (
            <Col xs='3'>
              <div className='albums'>
                <Card key={track.id} style={{ width: '18rem' }}>
                  <Card.Img
                    variant='top'
                    src={
                      track.album.images.length > 0
                        ? track.album.images[0].url
                        : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png'
                    }
                  />
                  <Card.Body>
                    <Card.Title>{track.name}</Card.Title>
                    <Card.Text>Artist: {track.artists[0].name}</Card.Text>
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

export default TracksList;
