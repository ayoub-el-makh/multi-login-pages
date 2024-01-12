import "./Personalinfo.css";
import { useState, useRef, useContext, useEffect } from "react";
import { Context } from "../../App.js";
import { NEXT_STEP, ADD_INFO } from "../reducer.js";
export default function Personalinfo() {
  const [errors, setErrors] = useState([]);
  const [isSend, setIsSend] = useState(false);
  const { dispatch, data } = useContext(Context);
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
  };
  const validation = () => {
    const patternEmail = /^[a-z0-9\._-]+@[a-z]+\.[a-z]+$/i;
    const patternPhone = /^(06|07|\+2126|\+2127)(\d{8})$/;
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const phoneValue = phone.current.value;
    setErrors([]);
    if (nameValue.trim() === "") {
      setErrors((prevState) => [...prevState, "Name required"]);
    } else if (!patternEmail.exec(emailValue)) {
      setErrors((prevState) => [...prevState, "Email required"]);
    } else if (!patternPhone.exec(phoneValue)) {
      setErrors((prevState) => [...prevState, "Phone required"]);
    } else {
      setIsSend(true);
    }
  };

  useEffect(() => {
    if (isSend) {
      const data = {
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
      };
      dispatch({ type: ADD_INFO, payload: { info: data } });
      dispatch({ type: NEXT_STEP, payload: { step: 1 } });
    }
  }, [dispatch, isSend]);

  return (
    <div className="personal-info">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={handleSubmit}>
        <div className="group-input">
          <label htmlFor="name">
            Name
            {errors.includes("Name required") && <span>Name required</span>}
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            ref={name}
            defaultValue={data.info.name}
          />
        </div>
        <div className="group-input">
          <label htmlFor="email">
            Email
            {errors.includes("Email required") && <span>Email invalid</span>}
          </label>
          <input
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            ref={email}
            defaultValue={data.info.email}
          />
        </div>
        <div className="group-input">
          <label htmlFor="phone">
            Phone Number
            {errors.includes("Phone required") && (
              <span>Phone Number invalid</span>
            )}
          </label>
          <input
            type="text"
            id="phone"
            placeholder="e.g. +212 123 456 789"
            ref={phone}
            defaultValue={data.info.phone}
          />
        </div>
        <div className="btn">
          <input type="submit" value="Next Step" />
        </div>
      </form>
    </div>
  );
}
