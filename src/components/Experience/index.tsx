import './style.css';
import { work, education } from './data';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Experience() {

    useEffect(() => {
        gsap.fromTo('#exp-title',
            {
                translateY: 100,
                opacity: 0,
            },
            {
                translateY: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.exp',
                    start: 'top bottom',
                    end: 'top center',
                    scrub: 1,
                }
            })
    }, []);

    useEffect(() => {
        gsap.fromTo('.work',
            {
                translateX: -400,
                opacity: 0,
            },
            {
                translateX: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.work',
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 1,
                }
            })
    }, []);

    useEffect(() => {
        gsap.fromTo('.education',
            {
                translateX: 400,
                opacity: 0,
            },
            {
                translateX: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.education',
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 1,
                }
            })
    }, []);

    return (
        <div className='section exp'>
            <div id="exp-title" className='text-shadows'>Experience</div>
            <div className='experience'>
                <div className='work'>
                    <div className='subtitle'>Work</div>
                    {work.map((item, index) => {
                        return (
                            <div key={index} className='job'>
                                <div className='name'>{item.name}</div><div>{item.date}</div>
                                {item.description.map((item, index) => { return <div key={index} className='description'>{item}</div> })}
                            </div>)
                    })
                    }
                </div>
                <div className='education'>
                    <div className='subtitle'>Education</div>
                    {education.map((item, index) => {
                        return (
                            <div key={index} className='university'>
                                <div className='name'>{item.name}</div><div>{item.date}</div>
                                {item.description.map((item, index) => { return <div key={index} className='description'>{item}</div> })}
                            </div>)
                    })
                    }

                </div>
            </div>
        </div >
    );
}