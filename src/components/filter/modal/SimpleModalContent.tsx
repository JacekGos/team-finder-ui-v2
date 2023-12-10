import * as React from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { GiTennisBall } from "react-icons/gi";
import { useContext, useState } from "react";
import { FilterContext } from "../../../context/filter-context/FilterContext";

export interface ISimpleModalContentProps {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SimpleModalContent(props: ISimpleModalContentProps) {
  
  const { activityType, setActivityType, location, setLocation } = useContext(FilterContext);
  const [locationSearchValue, setLocationSearchValue] = useState<string>(location);

  const handleShowEvents = () => {
    console.log("handleShowEvents: ", locationSearchValue);
    setLocation(locationSearchValue);
    props.handleClose(false);
  };

  const handleLocationChange = (event: any) => {
    if (!event.target.value) {
      setLocationSearchValue(location);
    }
    setLocationSearchValue(event.target.value);
  };

  const handleClearLocation = () => {
    setLocationSearchValue("");
    setLocation("");
  };

  const handleActivityChange = (activityName: string) => {
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
        <div className="d-flex align-items-center justify-content-start mt-4">
          <Form>
            <Form.Group className="p-2">
              <Form.Control
                placeholder={
                  locationSearchValue ? locationSearchValue : "lokalizacja"
                }
                value={locationSearchValue}
                className="input-search"
                style={{ maxWidth: "50vh" }}
                onChange={handleLocationChange}
              />
            </Form.Group>
          </Form>
          {location && (
            <button
              className="btn-base rounded-circle d-flex align-items-center p-1 ms-2"
              onClick={() => handleClearLocation()}
            >
              <TfiClose size={8} />
            </button>
          )}
        </div>
        <div
          className="d-flex flex-column align-items-start gap-3 ps-2 pb-5 modal-bottom-border"
          style={{ marginTop: 30 }}
        >
          {acitivitesIcons}
        </div>
        <div className="d-flex align-items-center justify-content-center w-100 mt-5">
          <button className="btn-base btn-filled" onClick={handleShowEvents}>
            Pokaż wydażenia
          </button>
        </div>
      </Modal.Body>
    </>
  );
}
