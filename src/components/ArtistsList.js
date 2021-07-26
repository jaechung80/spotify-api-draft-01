import React, { useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const ArtistsList = (props) => {
  useEffect(() => {
    console.log('in ArtistsList props.artists', props.artists);
  });

  return (
    <Container>
      <Row>
        {props.artists?.items?.map((artist) => {
          return (
            <Col xs='3'>
              <div className='artists'>
                <Card key={artist.id} style={{ width: '18rem' }}>
                  <Card.Img
                    variant='top'
                    src={
                      artist.images.length > 0
                        ? artist.images[0].url
                        : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png'
                    }
                  />
                  <Card.Body>
                    <Card.Title>{artist.name}</Card.Title>
                    <Card.Text>
                      Genres: {artist.genres[0] || 'not listed'}
                    </Card.Text>
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

export default ArtistsList;
