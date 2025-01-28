import React, { useEffect, useState } from "react";
import SecondsCounter from "./SecondsCounter";
const Home = () => {
    const [seconds, setSeconds]= useState(0);
    useEffect(() =>{
        const interval = setInterval(() =>{
            setSeconds(prevSeconds => prevSeconds + 1)
        },1000)
        return () => clearInterval(interval);
    },[]);
    return (
        <div className="text-center">
            <SecondsCounter  seconds={seconds} />
        </div>
    );
};
export default Home;