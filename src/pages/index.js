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
} from "../components/home";
import CareerChange from "../components/home/CareerChange";
import InnovationService from "../components/home/Innovation";

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
      <WhyInnovatics />
      <Practicality />
      <JoinCohort />
      <Consulting />
      <ExplanationSection
        color={"#8B90FF"}
        title={"Expertise"}
        subwithcolor="Whether you need assistance with a specific project or want to optimize your tech infrastructure, we can provide the guidance and support you need."
        subtitle="Our contracting services are also available to help you complete projects on time and on budget, with a team of skilled professionals at your disposal."
      />
      <InnovationService />
      <ExplanationSection
        color={"#EA6045"}
        title={"Creativity"}
        subwithcolor="We understand the importance of staying ahead of the curve in the tech industry."
        subtitle="We work with you to develop custom solutions tailored to your specific needs, whether you are looking to optimize your current processes or develop new technologies."
      />
      <CareerChange />
      <ExplanationSection
        color={"#DD56FF"}
        title={"Creativity"}
        subwithcolor="If you are looking to transition into the tech industry or take your career to the next level, we can help."
        subtitle="We offer resume building and interview preparation services, as well as connections to top employers in the tech industry."
      />
      <LiveSection />
      <Newslettersection />
      <JoinDiscord />
    </div>
  );
}
