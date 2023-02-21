import Head from "next/head";

import Hero from "../components/home/Hero";
import JoinCohort from "../components/JoinCohort";
import Practicality from "../components/home/Practicality";
import WhyInnovatics from "../components/home/WhyInnovatics";
import OnDemandSection from "../components/home/OnDemandSection";
import LearningsSections from "../components/home/LearningsSections";
import FeaturedSection from "../components/home/FeaturedSection";
import CoursesSection from "../components/home/CoursesSection";
import PricingSection from "../components/home/PricingSection";
import LiveSection from "../components/home/LiveSection";
import CareerTalksSection from "../components/home/CareerTalksSection";
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
      <JoinDiscord />
    </div>
  );
}
