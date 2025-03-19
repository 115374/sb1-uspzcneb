import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import ProblemSolution from '../components/sections/ProblemSolution';
import Process from '../components/sections/Process';
import Benefits from '../components/sections/Benefits';
import CallToAction from '../components/sections/CallToAction';
import AutomationApproaches from '../components/sections/AutomationApproaches';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Services />
      <Benefits />
      <AutomationApproaches />
      <Process />
      <CallToAction />
    </>
  );
}