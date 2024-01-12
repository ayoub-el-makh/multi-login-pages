import { useReducer, createContext, useMemo } from "react";
import Personalinfo from "./Components/Personal-Info/Personalinfo";
import StepsNavigation from "./Components/Stepsnavigation/StepsNavigation";
import "./App.css";
import { reducer } from "./Components/reducer";
const initialValue = {
  info: {
    name: "",
    email: "",
    phone: "",
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
      </div>
    </Context.Provider>
  );
}

export default App;
