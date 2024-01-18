import { useContext } from "react";
import { Context } from "../../App";
import "./FinishingUp.css";
import { NEXT_STEP } from "../reducer";
export default function FinishingUp() {
  const { data, dispatch } = useContext(Context);
  const handleGoBack = () => {
    dispatch({ type: NEXT_STEP, payload: { step: -1 } });
  };
  const handleConfirm = () => {
    dispatch({ type: NEXT_STEP, payload: { step: -1 } });
};
const handleClick = (e)=>{
    e.preventDefault()
    dispatch({ type: NEXT_STEP, payload: { step: -2 } });
  }

  const displayServices = ()=>{
    return data.services.map(({name, price}, key)=>(
        <div key={key}>
            <p>{name}</p>
            <p>+${price}/{data.subscription.subscription === "Monthly" ? "mo": "yr"}</p>
        </div>
    ))
  };
  const TotalServices = () => data.services.reduce((total, {price})=> total + price, 0) + data.subscription.price;
  return (
    <div className="Finishing-up">
      <h1>Finishing Up </h1> 
      <p>Double-check everything looks OK before confirming</p>
      <div className="total-content">
        <div className="Plan">
          <div>
            <p>{data.subscription.type} ({data.subscription.subscription})</p>
            <a href="#" onClick={handleClick}>Change</a>
          </div>
          <p>${data.subscription.price}/{data.subscription.subscription === "Yearly"?"yr":"mo"}</p>
        </div>
        <hr />
        <div className="Services">
          {displayServices()}
        </div>
        <div className="total-price">
          <p>Totale (per {data.subscription.subscription === "Yearly"?"year":"month"})</p>
          <strong>+${TotalServices()}/{data.subscription.subscription === "Yearly"?"yr":"mo"}</strong>
        </div>
      </div>
      <div className="NextBack">
        <button className="back" onClick={handleGoBack}>
          Go Back
        </button>
        <button type="button" className="next" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}
