import { useContext, useRef, useState } from "react";
import "./PickAddOns.css";
import { Context } from "../../App";
import { NEXT_STEP, ADD_SERVICES } from "../reducer";

export default function PickAddOns() {
  const { data, dispatch } = useContext(Context);
  const [services, setServices] = useState([...data.services]);
  const onlineServer = useRef();
  const largerStorage = useRef();
  const customazibleProfile = useRef();
  const handelClickBack = () => {
    dispatch({ type: NEXT_STEP, payload: { step: -1 } });
  };
  const getTypeSubscription = (e) => {
    const type = e.currentTarget.dataset.service;
    switch (type) {
      case "onlineServer":
        onlineServer.current.checked = !onlineServer.current.checked;
        updateServices(
          onlineServer,
          "onlineServer",
          data.subscription.subscription === "Monthly" ? 1 : 10
        );
        break;
      case "largerStorage":
        largerStorage.current.checked = !largerStorage.current.checked;
        updateServices(
          largerStorage,
          "largerStorage",
          data.subscription.subscription === "Monthly" ? 2 : 20
        );
        break;
      case "customazibleProfile":
        customazibleProfile.current.checked =
          !customazibleProfile.current.checked;
        updateServices(
          customazibleProfile,
          "customazibleProfile",
          data.subscription.subscription === "Monthly" ? 2 : 20
        );
        break;
      default:
        return;
    }
  };

  const updateServices = (element, nameService, price) => {
    if (element.current.checked) {
      setServices((prevState) => [...prevState, { name: nameService, price }]);
    } else {
      setServices((prevState) =>
        prevState.filter(({ name }) => name !== nameService)
      );
    }
  };
  const handelClickNext = () => {
    dispatch({ type: NEXT_STEP, payload: { step: 1 } });
    dispatch({ type: ADD_SERVICES, payload: { services } });
  };
  return (
    <div className="Pick-add-ons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="Services">
        <div
          className={
            services.some(({ name }) => name === "onlineServer")
              ? "service Service-selected"
              : "service"
          }
          data-service="onlineServer"
          onClick={getTypeSubscription}
        >
          <input type="checkbox" ref={onlineServer} />
          <div className="info">
            <p>Online service</p>
            <p>Access to multiplayer</p>
          </div>
          <p className="price">
            {data.subscription.subscription === "Yearly" ? "+$10/yr" : "+$1/mo"}
          </p>
        </div>
        <div
          className={
            services.some(({ name }) => name === "largerStorage")
              ? "service Service-selected"
              : "service"
          }
          data-service="largerStorage"
          onClick={getTypeSubscription}
        >
          <input type="checkbox" ref={largerStorage} />
          <div className="info">
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className="price">
            {data.subscription.subscription === "Yearly" ? "+$20/yr" : "+$2/mo"}
          </p>
        </div>
        <div
          className={
            services.some(({ name }) => name === "customazibleProfile")
              ? "service Service-selected"
              : "service"
          }
          data-service="customazibleProfile"
          onClick={getTypeSubscription}
        >
          <input type="checkbox" ref={customazibleProfile} />
          <div className="info">
            <p>Customizable Profile</p>
            <p>Custom theme on your profile</p>
          </div>
          <p className="price">
            {data.subscription.subscription === "Yearly" ? "+$20/yr" : "+$2/mo"}
          </p>
        </div>
      </div>
      <div className="NextBack">
        <button className="back" onClick={handelClickBack}>
          Go Back
        </button>
        <button type="button" className="next" onClick={handelClickNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}
