import React from "react"
import {useState, useEffect} from "react"

const TimerContainer = (props) => {
    return (
        <div>
            <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
            <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>
        </div>
    )
}

export default TimerContainer