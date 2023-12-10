import * as React from "react";
import { useContext, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";
import { FilterContext } from "../../../context/filter-context/FilterContext";
import {
  EventDate,
  Price,
} from "../../../context/filter-context/filterContextModel";

export interface IAdvancedModalContentProps {
  isFullscreen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AdvancedModalContent(props: IAdvancedModalContentProps) {

  const { range, setRange, price, setPrice, date, setDate } =
    useContext(FilterContext);
  const [rangeValue, setRangeValue] = useState<number>(range);
  const [priceValue, setPriceValue] = useState<Price>(price);
  const [dateValue, setDateValue] = useState<EventDate>(date);

  console.log('date: ', date);

  const handleShowEvents = () => {
    console.log('show events');
    setRange(rangeValue);
    setPrice(priceValue);
    setDate(dateValue);
    props.handleClose(false);
  };

  const handleRangeChange = (event: any) => {
    setRangeValue(event.target.value);
  };

  const handleMinPriceChange = (event: any) => {
    setPriceValue({ min: event.target.value, max: priceValue.max });
  };

  const handleMaxPriceChange = (event: any) => {
    setPriceValue({ min: priceValue.min, max: event.target.value });
  };

  const handleDateFromChange = (event: any) => {
    setDateValue({ from: event.target.value, to: dateValue.to });
  };

  const handleDateToChange = (event: any) => {
    setDateValue({ from: dateValue.from, to: event.target.value });
  };

  return (
    <>
      <Modal.Header className="modal-base modal-bottom-border">
        <Modal.Title>Więcej filtrów</Modal.Title>
        <button
          className="btn-base rounded-circle d-flex align-items-center p-2"
          onClick={() => props.handleClose(false)}
        >
          <TfiClose />
        </button>
      </Modal.Header>
      <Modal.Body className="modal-base">
        <Form>
          <Form.Group className="modal-bottom-border">
            <Form.Label>Zasięg [ km ]</Form.Label>
            <Form.Range
              min={1}
              max={30}
              step={1}
              onChange={handleRangeChange}
              value={rangeValue}
            />
            <div className="d-flex align-items-center justify-content-center">
              <Form.Control
                type="number"
                placeholder="km"
                className="input-search mb-3 w-50"
                style={{ maxWidth: "50vh" }}
                onChange={handleRangeChange}
                value={rangeValue}
              />
            </div>
          </Form.Group>
          <Form.Group className="modal-bottom-border">
            <Form.Label>Cena [ zł ]</Form.Label>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column align-items-center ps-3 pe-3">
                <Form.Text>min.</Form.Text>
                <Form.Control
                  type="number"
                  placeholder="zł"
                  className="input-search mb-3 w-100"
                  value={priceValue.min}
                  onChange={handleMinPriceChange}
                />
              </div>
              <div className="d-flex flex-column align-items-center ps-3 pe-3">
                <Form.Text>max.</Form.Text>
                <Form.Control
                  type="number"
                  placeholder="zł"
                  className="input-search mb-3 w-100"
                  value={priceValue.max}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="modal-bottom-border">
            <Form.Label>Gracze</Form.Label>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column align-items-center ps-3 pe-3">
                <Form.Text>min.</Form.Text>
                <Form.Control
                  type="number"
                  placeholder="0"
                  className="input-search mb-3 w-100"
                />
              </div>
              <div className="d-flex flex-column align-items-center ps-3 pe-3">
                <Form.Text>max.</Form.Text>
                <Form.Control
                  type="number"
                  placeholder="25"
                  className="input-search mb-3 w-100"
                />
              </div>
            </div>
          </Form.Group>
          {/* <Form.Group className="modal-bottom-border">
            <Form.Label>Data</Form.Label>
            <div className="d-flex align-items-center justify-content-between ps-3">
              <div className="d-flex flex-column align-items-center ">
                <Form.Text>od</Form.Text>
                <Form.Control
                  type="datetime-local"
                  className="input-search mb-3 w-100"
                  value={dateValue.from}
                  onChange={handleDateFromChange}
                />
              </div>
              <div className="d-flex flex-column align-items-center pe-3">
                <Form.Text>do</Form.Text>
                <Form.Control
                  type="datetime-local"
                  className="input-search mb-3 w-100"
                  value={dateValue.to}
                  onChange={handleDateToChange}
                />
              </div>
            </div>
          </Form.Group> */}
          <div className="d-flex align-items-center justify-content-center  w-100 mt-3">
            <button className="btn-base btn-filled" onClick={handleShowEvents}>
              Pokaż wydażenia
            </button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
}
