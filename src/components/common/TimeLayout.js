import React from 'react'

export default function TimeLayout({ days, hours, minutes, seconds }) {
    return (
        <div className="timer_inner">
            <div id="timer" className="timer">
                <div className="timer__section days">
                    <div className="timer__number" >{days}</div>
                    <div className="timer__label">days</div>
                </div>
                <div className="timer__section hours">
                    <div className="timer__number">{hours}</div>
                    <div className="timer__label">hours</div>
                </div>
                <div className="timer__section minutes">
                    <div className="timer__number">{minutes}</div>
                    <div className="timer__label">Minutes</div>
                </div>
                <div className="timer__section seconds">
                    <div className="timer__number">{seconds}</div>
                    <div className="timer__label">seconds</div>
                </div>
            </div>
        </div>
    )
}
