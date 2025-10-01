import Image from 'next/image';
import { Fragment } from 'react'
const textSliderData = [
    "Solar Pane",
    "Water Heating",
    "Solar Financing",
    "Hydro Power",
    "Solar Energy",
    "Solar Pane",
    "Water Heating",
    "Solar Financing",
    "Hydro Power",
    "Solar Energy",
    "Solar Pane",
    "Water Heating",
    "Solar Financing",
    "Hydro Power",
    "Solar Energy"
];
const MarqueOne = () => {
    return (
        <div className="marque-section">
            <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item">
                            {textSliderData.map((text, index) => (
                                <Fragment key={index}>
                                    <span className="text-slider">{text}</span>
                                    <span className="text-slider">
                                        <Image width={50} height={50} src="/img/star.svg" alt="img" />
                                    </span>
                                </Fragment>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default MarqueOne