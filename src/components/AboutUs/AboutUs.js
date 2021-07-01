import React from 'react'
import { Button } from 'react-bootstrap';
import aboutUs from './students.jpg'
import './AboutUs.css'
const AboutUs = () => {

    return (
        <div className="container bg-gray py-5">
            <div className="row flex align-items-center">
                <div className="col-md-6">
                    <img src={aboutUs} alt="" className="w-100"/>
                </div>
                <div className="col-md-6">
                    <div className="heading text-left">
                        <h2><b>Why we are best for selling programming related books?</b></h2>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit expedita illo, nesciunt nulla nisi incidunt suscipit iusto consectetur repellendus quas hic aliquid atque minima officia ullam beatae odio deserunt rem ipsa est ex, qui sequi! Commodi quibusdam corporis accusantium tempora, labore in praesentium temporibus impedit nisi itaque inventore placeat.</p>
                        <Button id="buy">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;