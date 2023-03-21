import Head from "next/head";
import ExplanationSection from "../components/ExplanationSection";

import {
  Hero,
  Practicality,
  WhyInnovatics,
  LearningsSections,
  FeaturedSection,
  CoursesSection,
  PricingSection,
  LiveSection,
  CareerTalksSection,
  Newslettersection,
  Consulting,
  OurPlatform,
} from "../components/home";

import JoinCohort from "../components/JoinCohort";
import JoinDiscord from "../components/JoinDiscord";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Innovatics | Home</title>
        <meta name="description" content="Welcome to Innovatics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <WhyInnovatics />
      <OurPlatform />
      <JoinDiscord />
    </div>
  );
}
