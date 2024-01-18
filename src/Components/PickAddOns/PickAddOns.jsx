import { useContext, useRef, useState } from "react";
import "./PickAddOns.css";
import { Context } from "../../App";
import { NEXT_STEP, ADD_SERVICES } from "../reducer";

export default function PickAddOns() {
  const { data, dispatch } = useContext(Context);
  const [services, setServices] = useState([...data.services]);
  const onlineService = useRef();
  const largerStorage = useRef();
  const customazibleProfile = useRef();
  const handelClickBack = () => {
    dispatch({ type: NEXT_STEP, payload: { step: -1 } });
  };
  const getTypeSubscription = (e) => {
    const type = e.currentTarget.dataset.service;
    switch (type) {
      case "Online service":
        onlineService.current.checked = !onlineService.current.checked;
        updateServices(
          onlineService,
          "Online service",
          data.subscription.subscription === "Monthly" ? 1 : 10
        );
        break;
      case "Larger storage":
        largerStorage.current.checked = !largerStorage.current.checked;
        updateServices(
          largerStorage,
          "Larger storage",
          data.subscription.subscription === "Monthly" ? 2 : 20
        );
        break;
      case "Customazible profile":
        customazibleProfile.current.checked =
          !customazibleProfile.current.checked;
        updateServices(
          customazibleProfile,
          "Customazible profile",
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
            services.some(({ name }) => name === "Online service")
              ? "service Service-selected"
              : "service"
          }
          data-service="Online service"
          onClick={getTypeSubscription}
        >
          <input type="checkbox" defaultChecked={services.some(({name})=> name === "Online service")} ref={onlineService} />
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
            services.some(({ name }) => name === "Larger storage")
              ? "service Service-selected"
              : "service"
          }
          data-service="Larger storage"
          onClick={getTypeSubscription}
        >
          <input type="checkbox" defaultChecked={services.some(({name})=> name === "Larger storage")} ref={largerStorage} />
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
            services.some(({ name }) => name === "Customazible profile")
              ? "service Service-selected"
              : "service"
          }
          data-service="Customazible profile"
          onClick={getTypeSubscription}
        >
          <input type="checkbox" defaultChecked={services.some(({name})=> name === "Customazible profile")} ref={customazibleProfile} />
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
