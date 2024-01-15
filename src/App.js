import { useReducer, createContext, useMemo } from "react";
import Personalinfo from "./Components/Personal-Info/Personalinfo";
import StepsNavigation from "./Components/Stepsnavigation/StepsNavigation";
import "./App.css";
import { reducer } from "./Components/reducer";
import SelectPlan from "./Components/SelectPlan/SelectPlan.jsx";
import PickAddOns from "./Components/PickAddOns/PickAddOns.jsx";
const initialValue = {
  info: {
    name: "",
    email: "",
    phone: "",
  },
  subscription: {
    subscription: "Monthly",
    type: "Arcade",
  },
  services: [],
  step: 1,
};
export const Context = createContext(initialValue);
function App() {
  const [data, dispatch] = useReducer(reducer, initialValue);
  const provider = useMemo(
    () => ({
      data: data,
      dispatch: dispatch,
    }),
    [data]
  );
  return (
    <Context.Provider value={provider}>
      <div className="container">
        <StepsNavigation />
        {data.step === 1 && <Personalinfo />}
        {data.step === 2 && <SelectPlan />}
        {data.step === 3 && <PickAddOns />}
        {data.step === 4 && console.log(data)}
      </div>
    </Context.Provider>
  );
}

export default App;
