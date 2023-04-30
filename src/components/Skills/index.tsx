import './style.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import data from './data';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.font.family = 'Bungee';
ChartJS.defaults.plugins.tooltip.enabled = false;

const opts: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
}

export default function Skills() {
    const net = useRef<ChartJS>(null);
    const front = useRef<ChartJS>(null);
    const sql = useRef<ChartJS>(null);
    const other = useRef<ChartJS>(null);

    useEffect(() => {
        function resize() {
            net.current?.update('resize');
            front.current?.update('resize');
            sql.current?.update('resize');
            other.current?.update('resize');
        }
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [])

    useEffect(() => {
        gsap.fromTo('#skills-title',
            {
                translateY: 100,
                opacity: 0,
            },
            {
                translateY: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.skills',
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 1,
                }
            })
    }, []);

    useEffect(() => {
        gsap.fromTo('.skills-container',
            {
                translateY: 500,
                opacity: 0,
            },
            {
                translateY: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.skills',
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 1,
                }
            })
    }, []);
    return (
        <div className='section skills'>
            <div id="skills-title">
                <div className='text-shadows'>Skills</div>
            </div>
            <div className='skills-charts'>
                <div className='skills-container'>
                    <Doughnut options={opts} data={data.NET}></Doughnut>
                </div>
                <div className='skills-container'>
                    <Doughnut options={opts} data={data.FRONT}></Doughnut>
                </div>
                <div className='skills-container'>
                    <Doughnut options={opts} data={data.SQL}></Doughnut>
                </div>
                <div className='skills-container'>
                    <Doughnut options={opts} data={data.OTHER}></Doughnut>
                </div>
            </div>
        </div>
    );
}