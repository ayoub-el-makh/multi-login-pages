import { useContext } from "react";
import "./StepsNavigation.css";
import { Context } from "../../App.js"
export default function StepsNavigation() {
    const {data:{step}} = useContext(Context);
  return (
    <nav>
      <ul>
        <li>
          <span className={step === 1 ? "Active-step" : ""}>1</span>
          <p>
            <span>STEP 1</span>
            <strong>Your Info</strong>
          </p>
        </li>
        <li>
          <span className={step === 2 ? "Active-step" : ""}>2</span>
          <p>
            <span>STEP 2</span>
            <strong>Select Plan</strong>
          </p>
        </li>
        <li>
          <span className={step === 3 ? "Active-step" : ""}>3</span>
          <p>
            <span>STEP 3</span>
            <strong>ADD-ONS</strong>
          </p>
        </li>
        <li>
          <span className={step === 4 || step === 5 ? "Active-step" : ""}>4</span>
          <p>
            <span>STEP 4</span>
            <strong>SUMMARY</strong>
          </p>
        </li>
      </ul>
    </nav>
  );
}
