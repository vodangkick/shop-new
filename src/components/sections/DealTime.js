import React from 'react';
import TitleMain from '../common/TitleMain';
import Countdown from 'react-countdown-now';
import TimeLayout from '../common/TimeLayout';

export default class DealHot extends React.Component {

    render() {
        // Renderer callback with condition
        const renderer = ({ days, hours, minutes, seconds }) => {
            return <TimeLayout days={days} hours={hours} minutes={minutes} seconds={seconds} />;
        };
        return (
            <section className="timer_area" >
                <div className="container">
                    <TitleMain title="Exclusive Hot Deal Ends Soon!" linkSite="/shop">
                        Who are in extremely love with eco friendly system.
                    </TitleMain>
                    <Countdown
                        date={Date.now() + 864000000}
                        renderer={renderer}
                    />
                </div>
            </section>
        )
    }
}