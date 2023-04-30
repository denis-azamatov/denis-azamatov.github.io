import './style.css';
import ScrollDown from '../ScrollDown';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
    useEffect(() => {
        gsap.to('.scroll-down', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.scroll-down',
                start: 'top 80%',
                end: 'bottom 70%',
                scrub: 1,
            }
        })
    }, []);

    useEffect(() => {
        gsap.to('#hi', {
            translateY: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero',
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 1,
            }
        })
    }, []);
    useEffect(() => {
        gsap.to('#name', {
            translateY: 200,
            translateX: -500,
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero',
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 1,
            }
        })
    }, []);
    useEffect(() => {
        gsap.to('#profession', {
            translateY: 200,
            translateX: 500,
            opacity: 0,

            scrollTrigger: {
                trigger: '.hero',
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 1,
            }
        })
    }, []);

    useEffect(() => {
        gsap.to('.download-link', {
            translateY: -100,
            opacity: 0,

            scrollTrigger: {
                trigger: '.hero',
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: .5,
            }
        })
    }, []);

    return (
        <div className='section hero'>
            <a href="cv.pdf" download="cv" className='download-link'>DOWNLOAD CV</a>
            <div className='hi-container'>
                <div id='hi'>
                    <div className='text-shadows'>Hi</div>
                </div>
                <div id="name">I'm Denis Azamatov</div>
                <div id="profession" className='text-small'>Software Developer</div>
            </div>
            <ScrollDown></ScrollDown>
        </div>
    );
}