import * as React from "react";
import { Carousel } from "react-bootstrap";
// import picture1 from '../../assets/sport1.png';
import picture1 from "../../assets/sport1.jpg";
import picture2 from "../../assets/sport2.jpg";
import picture3 from "../../assets/sport3.jpg";

export interface IPicturesProps {}

export default function Pictures(props: IPicturesProps) {
  const interval = 2000;
  const maxHeight = 430;

  return (
    <div>
      <Carousel fade={true} slide={false}>
        <Carousel.Item interval={interval} style={{ textAlign: "center" }}>
          <div
            style={{
              maxHeight: maxHeight,
              borderRadius: 5,
              overflow: "hidden",
            }}
            className="d-flex jsutify-content-center align-items-center"
          >
            <img src={picture1} alt="picture1" className="w-100" />
          </div>
          <Carousel.Caption className="img-description-container">
            <p className="img-description">Wybierz dyscyplinę</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval} style={{ textAlign: "center" }}>
          <div
            style={{
              maxHeight: maxHeight,
              borderRadius: 5,
              overflow: "hidden",
            }}
            className="d-flex jsutify-content-center align-items-center"
          >
            <img src={picture2} alt="picture2" className="w-100" />
          </div>
          <Carousel.Caption className="img-description-container">
            <p className="img-description">Znajdź zespół</p>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <div
            style={{
              maxHeight: maxHeight,
              borderRadius: 5,
              overflow: "hidden",
            }}
            className="d-flex jsutify-content-center align-items-center"
          >
            <img src={picture3} alt="picture3" className="w-100" />
          </div>
          <Carousel.Caption className="img-description-container">
            <p className="img-description">Dołącz</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
