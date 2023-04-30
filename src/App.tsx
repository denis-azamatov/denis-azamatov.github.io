// @ts-ignore
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
const options = { };
export default function App() {
  useEffect(() => {

  }, []);

  return (
    <ReactLenis root options={{ ...options }}>
      <Hero></Hero>
      <Experience></Experience>
      <Skills></Skills>
      <Contacts></Contacts>
    </ReactLenis>
  )
}