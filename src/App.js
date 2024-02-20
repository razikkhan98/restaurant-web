import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Component/Main/main";
import Loading from "./Component/Common/Loading/loading";
import Receptionis from "../src/Component/Pages/Receptionist/ReceptionistIndex/index";
import Customer from "./Component/Pages/Customer/customer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datat = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    datat();
  }, []);

  return (
    <>
      {/* {loading ? <Loading /> : <Main />} */}
      <Customer/>
    </>
  );
}

export default App;
