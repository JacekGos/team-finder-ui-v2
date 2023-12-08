import * as React from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { GiTennisBall } from "react-icons/gi";
import { useState } from "react";
import { FilterContext } from "../../../context/filter-context/FilterContext";

export interface ISimpleModalContentProps {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SimpleModalContent(props: ISimpleModalContentProps) {
  const { activityType, setActivityType, location, setLocation  } =
    React.useContext(FilterContext);
  const [locationSearchValue, setLocationSearchValue] = useState<string>(location);
  const [activityChoosen, setActivityChoosen] = useState<string>("");

  const handleShowEvents = () => {
    console.log('location seatrch: ', locationSearchValue);
    setLocation(locationSearchValue);
    props.handleClose(false);
  };
  
  const handleLocationChange = (event: any) => {
    if (!event.target.value) {
      console.log('set current location...', location);
      setLocationSearchValue(location);
    }
    setLocationSearchValue(event.target.value);
  };

  const handleLocationKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setLocation(locationSearchValue);
    }
  };

  const handleActivityChange = (activityName: string) => {
    console.log('handleActivityChange with name: ', activityName);
    if (activityType === activityName) {
      setActivityType("");
    } else {
      setActivityType(activityName);
    }
  };

  const iconSize = 30;
  const iconColor = "white";

  let icons = [
    {
      name: "FOOTBALL",
      label: "Piłka nozna",
      icon: <BiFootball size={iconSize} style={{ color: `${iconColor}` }} />,
    },
    {
      name: "VOLLEYBALL",
      label: "Siatkówka",
      icon: (
        <FaVolleyballBall size={iconSize} style={{ color: `${iconColor}` }} />
      ),
    },
    {
      name: "BASKETBALL",
      label: "Koszykówka",
      icon: (
        <FaBasketballBall size={iconSize} style={{ color: `${iconColor}` }} />
      ),
    },
    {
      name: "TENNIS",
      label: "Tenis",
      icon: <GiTennisBall size={iconSize} style={{ color: `${iconColor}` }} />,
    },
    {
      name: "BICYCLE",
      label: "Rower",
      icon: <IoIosBicycle size={iconSize} style={{ color: `${iconColor}` }} />,
    },
  ];

  const acitivitesIcons = icons.map((activity, key) => {
    return (
      <div className="d-flex align-items-center" key={key}>
        <button
          className={`rounded-circle btn-rounded ${
            activityType === activity.name ? "input-circle-active" : ""
          }`}
          style={{ aspectRatio: "1/1" }}
          onClick={() => handleActivityChange(activity.name)}
        >
          {activity.icon}
        </button>
        <p className="p-0 m-0 ms-3 fs-5">{activity.label}</p>
      </div>
    );
  });

  return (
    <>
      <Modal.Header className="modal-base modal-bottom-border">
        <Modal.Title>Wyszukaj</Modal.Title>
        <button
          className="btn-base rounded-circle d-flex align-items-center p-2"
          onClick={() => props.handleClose(false)}
        >
          <TfiClose />
        </button>
      </Modal.Header>
      <Modal.Body className="modal-base p-0">
        <Form>
          <Form.Group className="position-fixed w-100 p-2">
            <div className="d-flex align-items-center justify-content-center">
              <Form.Control
                placeholder={location ? location : 'lokalizacja'}
                className="input-search mb-3"
                style={{ maxWidth: "50vh" }}
                onChange={handleLocationChange}
                onKeyDown={handleLocationKeyDown}
              />
            </div>
          </Form.Group>
          <Form.Group className="d-flex flex-column align-items-start gap-3 ps-2 modal-bottom-border">
            <div style={{ marginTop: 70 }}></div>
            {acitivitesIcons}
            <div style={{ marginTop: 70 }}></div>
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center  w-100 mt-3">
            <button
              className="btn-base btn-filled"
              onClick={handleShowEvents}
            >
              Pokaż wydażenia
            </button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
}
