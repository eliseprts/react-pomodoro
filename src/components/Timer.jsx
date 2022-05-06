import React, {useState} from "react";
import TimerContainer from "./TimerContainer"
import Btns from "./Btns"
import Modal from "./Modal"

import TimerStyle from '../style/Timer.css'

function Timer() {

    const [time, setTime] = useState({ s: 0, m: 25 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // Status:
    // Not started = 0
    // Started = 1
    // Stopped = 2
    // START COUNTDOWN
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    };

    var updatedS = time.s, updatedM = time.m;
    // Countdown
    const run = () => {

        if ((updatedM === 0) && (updatedS === 0)) {
            clearInterval(interv);
            setStatus(0);
            console.log("times up");
            return setTime({ s: 15, m: 0 });
        }
        else if (updatedS === 0) {
            updatedM--;
            updatedS = 59;
        }
        else {
            updatedS--;
        }
        return setTime({ s: updatedS, m: updatedM });
    };

    // STOP COUNTDOWN
    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    // RESET COUNTDOWN
    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ s: 15, m: 0 });
    };

    // RESUME COUNTDOWN
    const resume = () => start();

    return (
        <div>
            <div className="countdownContainer">
                <TimerContainer time={time} />
            </div>
            <div className="btnContainer">
                <Btns status={status} start={start} stop={stop} reset={reset} resume={resume} />
            </div>
        </div>
    );
}

export default Timer