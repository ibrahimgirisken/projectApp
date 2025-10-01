'use client'
import Image from "next/image";
import { useState } from "react";
import ModalVideo from 'react-modal-video';

const AboutRoundedTextVideoPopup = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="video-box">
                <a href="#" onClick={(e) => { e.preventDefault(), setOpen(true) }} className="video-buttton video-popup">
                    <i className="fa-solid fa-play" />
                    <Image width={123} height={123} src="/img/about/circle-text.png" alt="text-img" className="text-circle" />
                </a>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="Cn4G2lZ_g2I"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default AboutRoundedTextVideoPopup