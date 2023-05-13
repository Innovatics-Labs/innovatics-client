import Head from 'next/head';
import Script from 'next/script';

import {
  Hero,
  WhyInnovatics,
  LiveSection,
  Newslettersection,
  Consulting,
  OurPlatform,
} from '../components/home';
import InnovationSection from '../components/home/InnovationSection';
import JobPlacement from '../components/home/JobPlacementSection';
import TrainingSection from '../components/home/TrainingSection';
// import OurProcess from '../components/OurProcess';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Innovatics | Home</title>
        <meta name='description' content='Welcome to Innovatics' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div class='elfsight-app-30d6bdde-4833-4cfe-ba79-775daceff83c'></div>
      <Hero />
      <WhyInnovatics />
      <OurPlatform />
      <Consulting />
      <InnovationSection />
      <JobPlacement />
      <TrainingSection />
      <LiveSection />
      <Newslettersection />
      <>
        <Script src='https://apps.elfsight.com/p/platform.js' />
      </>
    </div>
  );
}
