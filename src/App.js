import { useReducer, createContext, useMemo } from "react";
import Personalinfo from "./Components/Personal-Info/Personalinfo";
import StepsNavigation from "./Components/Stepsnavigation/StepsNavigation";
import "./App.css";
import { reducer } from "./Components/reducer";
import SelectPlan from "./Components/SelectPlan/SelectPlan.jsx";
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
      </div>
    </Context.Provider>
  );
}

export default App;
