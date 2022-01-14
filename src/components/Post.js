import React from "react";
import {Card, Button} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Post = (props) =>(
    <Card>
  <Card.Img variant="top"></Card.Img> <StaticImage
      src="../images/vpLogo.png"
      width={10}
      height={50}
    />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.excerpt}
    </Card.Text>
    <Button variant="primary">{props.title}</Button>
  </Card.Body>
</Card>
);

export default Post;