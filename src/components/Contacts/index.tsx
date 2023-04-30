import { useEffect } from 'react';
import gsap from 'gsap';
import './style.css';
export default function Contacts() {
    useEffect(() => {
        gsap.fromTo('#contacts-title',
            {
                translateY: 100,
                opacity: 0,
            },
            {
                translateY: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.contacts',
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 1,
                }
            })
    }, []);

    useEffect(() => {
        gsap.fromTo('.links',
            {
                translateY: 500,
                opacity: 0,
            },
            {
                translateY: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.contacts',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: 1,
                }
            })
    }, []);

    useEffect(() => {
        gsap.to('.download-link-bottom', {
            translateY: -100,

            scrollTrigger: {
                trigger: '.contacts',
                start: 'top top',
                end: 'center top',
                scrub: 1,
            }
        })
    }, []);

    return (
        <div className="section contacts">
            <a href="cv.pdf" download="cv" className='download-link-bottom'>DOWNLOAD CV</a>
            <div id="contacts-title">
                <div className='text-shadows'>Contacts</div>
            </div>
            <div className='links'>
                <div className='contact-link'>
                    <span className='contact-link-icon'><img src="google-plus.png" alt="" /></span>
                    <a href="mailto:bejsekeevdenis@gmail.com" target="_blank" rel="noreferrer">Gmail</a>
                </div>
                <div className='contact-link'>
                    <span className='contact-link-icon'><img src="linkedin.png" alt="" /></span>
                    <a href="https://linkedin.com/in/denisazamatov" target="_blank" rel="noreferrer">Linkedin</a>
                </div>
                <div className='contact-link'>
                    <span className='contact-link-icon'><img src="telegram.png" alt="" /></span>
                    <a href="https://t.me/Denis_azmtv" target="_blank" rel="noreferrer">Telegram</a>
                </div>
                <div className='contact-link'>
                    <span className='contact-link-icon'><img src="github.png" alt="" /></span>
                    <a href="https://github.com/denis-azamatov" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    )
}