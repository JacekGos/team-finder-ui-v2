import * as React from "react";
import { Carousel } from "react-bootstrap";
// import picture1 from '../../assets/sport1.png';
import picture1 from "../../assets/sport1.png";

export interface IPicturesProps {}

export default function Pictures(props: IPicturesProps) {

    const interval = 2000;

  return (
    <div>
      <Carousel>
        <Carousel.Item interval={interval}>
          <img src={picture1} alt="picture1" className="w-100" style={{borderRadius: 10}}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img src={picture1} alt="picture2" className="w-100" style={{borderRadius: 10}}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img src={picture1} alt="picture3" className="w-100" style={{borderRadius: 10}}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
