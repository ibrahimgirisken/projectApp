import Image from "next/image";
import { Fragment } from "react";

const marqueeItems = [
    'Solar Pane',
    'Water Heating',
    'Financing',
    'Hydro Power',
    'Solar Pane',
    'Water Heating',
    'Financing',
    'Hydro Power',
    'Solar Pane',
    'IT Solution',
    'Water Heating',
    'Hydro Power',
];
const MarqueThree = () => {
    return (
        <div className="marque-section-2 section-padding pt-0">
            <div className="container-fluid">
                <div className="marquee-wrapper style-2 text-slider">
                    <div className="marquee-inner to-left">
                        <ul className="marqee-list d-flex">
                            <li className="marquee-item style-2">
                                {marqueeItems.map((item, index) => (
                                    <Fragment key={index}>
                                        <span className="text-slider">
                                            <Image width={50} height={54} src="/img/asterisk.svg" alt="img" />
                                        </span>
                                        <span className="text-slider text-style">{item}</span>
                                    </Fragment>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MarqueThree