import { Button, Col, Form, Row } from "react-bootstrap";
import "./filterbar.css";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsSliders2 } from "react-icons/bs";
import { GiTennisBall } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { useContext, useState } from "react";
import { FilterContext } from "../../context/filter-context/FilterContext";

export interface IFilterBarDesktopViewProps {
  handleModal: (isFullscreen: boolean, type: string) => void;
}

export default function FilterBarDesktopView(
  props: IFilterBarDesktopViewProps
) {
  const { activityType, setActivityType, location, setLocation } =
    useContext(FilterContext);
  const [locationSearchValue, setLocationSearchValue] =
    useState<string>(location);

  const handleLocationChange = (event: any) => {
    setLocationSearchValue(event.target.value);
  };

  const handleClearLocation = () => {
    console.log("clear location in filter");
    setLocationSearchValue("");
    setLocation("");
  };

  const handleLocationKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setLocation(locationSearchValue);
    }
  };

  const handleActivityChange = (activityName: string) => {
    console.log("change acitivity for: ", activityName);
    if (activityType === activityName) {
      console.log("change acitivity for disabled");
      setActivityType("");
    } else {
      setActivityType(activityName);
    }
  };

  const iconSize = 30;
  const iconColor = "white";

  const activitiesIconsData = [
    {
      name: "FOOTBALL",
      icon: <BiFootball size={iconSize} style={{ color: "#914950" }} />,
    },
    {
      name: "VOLLEYBALL",
      icon: <FaVolleyballBall size={iconSize} style={{ color: "#c5db1f" }} />,
    },
    {
      name: "BASKETBALL",
      icon: <FaBasketballBall size={iconSize} style={{ color: "#6b2210" }} />,
    },
    {
      name: "TENNIS",
      icon: <GiTennisBall size={iconSize} style={{ color: "#914950" }} />,
    },
    {
      name: "BICYCLE",
      icon: <IoIosBicycle size={iconSize} style={{ color: "#EABC39" }} />,
    },
  ];

  const acitivitesIcons = activitiesIconsData.map((activity, index) => {
    return (
      <Button
        key={index}
        className={`rounded-circle input-circle ${
          activityType === activity.name ? "input-circle-active" : ""
        }`}
        style={{ aspectRatio: "1/1" }}
        onClick={() => handleActivityChange(activity.name)}
      >
        {activity.icon}
      </Button>
    );
  });

  return (
    <>
      <div>
        <Row className="d-flex" style={{ height: 90, background: "#1D2125" }}>
          <Col
            xs={2}
            sm={2}
            md={4}
            className="d-flex align-items-center justify-content-start ps-4"
          >
            <Form className="d-flex justify-content-center align-items-center">
              <Form.Group>
                <Form.Control
                  placeholder={
                    locationSearchValue ? locationSearchValue : "lokalizacja"
                  }
                  value={locationSearchValue}
                  className="input-search"
                  onChange={handleLocationChange}
                  onKeyDown={handleLocationKeyDown}
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
          </Col>
          <Col
            xs={3}
            sm={5}
            md={4}
            className="d-flex align-items-center justify-content-between"
          >
            {acitivitesIcons}
          </Col>
          <Col
            xs={7}
            sm={5}
            md={4}
            className="d-flex align-items-center justify-content-end"
          >
            <button
              className="btn-base text-nowrap d-flex align-items-center"
              onClick={() => props.handleModal(false, "advanced")}
            >
              <BsSliders2 className="me-1 d-flex" />
              Więcej filtrów
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
}
