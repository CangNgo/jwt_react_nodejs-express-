import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axiosJWT from "../config/axiosConfig";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchHelloworld = async () => {
      const res = await axiosJWT.get(`/api/v1`)
      console.log(res)
    }

    fetchHelloworld()
  },[])


    return <>Hello</>;
}

export default App;
