import Head from "next/head";

import {
  Hero,
  Practicality,
  WhyInnovatics,
  OnDemandSection,
  LearningsSections,
  FeaturedSection,
  CoursesSection,
  PricingSection,
  LiveSection,
  CareerTalksSection,
  Newslettersection,
} from "../components/home";

import JoinCohort from "../components/JoinCohort";
import JoinDiscord from "../components/JoinDiscord";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Innovatics</title>
        <meta name="description" content="Welcome to Innovatics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <JoinCohort />
      <Practicality />
      <WhyInnovatics />
      <OnDemandSection />
      <LearningsSections />
      <FeaturedSection />
      <CoursesSection />
      <PricingSection />
      <LiveSection />
      <CareerTalksSection />
      <Newslettersection />
      <JoinDiscord />
    </div>
  );
}
