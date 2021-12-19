import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import Video1 from '../../videos/video1.mp4';
import Navbar from '../Navbar.js';
import ModalVideo from 'react-modal-video';
import {MdOutlinePlayCircleFilled} from 'react-icons/md'
import { SectionContainer, HeroBg, VideoBg, HeroP, HeroContent, HeroH1 } from './SectionElements'
function Section() {
    const [isOpen, setOpen] = useState(false)

 
    return (
        <>

            <SectionContainer id="home">

                <HeroBg>
                    <Navbar />
                    <VideoBg autoPlay muted loop src={Video} type="videomp4" />
                    <VideoBg autoPlay muted loop src={Video1} type="video1mp4" />
                </HeroBg>

                <HeroContent>

                    <HeroP>
                        We Bring together custom owners and video platform
                    </HeroP>
                    <HeroH1>THRIVE</HeroH1>
                    <HeroP>
                        in the new world.A multi-screen world.
                    </HeroP>
                    <HeroP>
                        <ModalVideo channel='youtube' style={{marginTop:"5rem"}} autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

                        <MdOutlinePlayCircleFilled   className="text-warning" onClick={() => setOpen(true)}/>
                    </HeroP>
                </HeroContent>

            </SectionContainer>
        </>
    )
}

export default Section
