import React from "react";
import styled from "styled-components";

import { GradientDivider } from "../services/career-change";
import LineGradient from "../../components/LineGradient";
import ServiceHero from "../../components/services/Hero";
import Newsletter from "../../components/Newsletter";
import ContactDetail from "../../components/ContactDetail";
import JoinDiscord from "../../components/JoinDiscord";
import { Contactcontainer } from "../about";
import {
  DetailSection,
  Description,
  ServiceContent,
} from "../services/training";
import FaqSection from "../../components/FaqSection";

const Faqs = () => {
  return (
    <div>
      <ServiceHero
        bgImage="/digitization.png"
        headline="Get Support"
        subtitle={"Need help? Reach out to us:"}
      />
      <DetailSection>
        <ServiceContent>
          <Description>
            <GradientDivider>
              <LineGradient
                height="100px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <p>
              Welcome to our support page! We&apos;re here to help you with any
              questions or concerns you may have regarding our services in the
              field of data science, cloud engineering, software engineering,
              and networking. Our team of dedicated support specialists is
              available around the clock to assist you with any issues you may
              encounter.
            </p>
            <GradientDivider>
              <LineGradient
                height="100px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
          </Description>

          <FaqDetail>
            <FaqSection />
            <GradientDivider>
              <LineGradient
                height="100px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
          </FaqDetail>
          <PhoneSupport>
            <h4 style={{ fontWeight: 600, fontSize: 32, marginBottom: 10 }}>
              Phone Support
            </h4>
            <p
              style={{ lineHeight: 1.5, maxWidth: "60ch", textAlign: "center" }}
            >
              If you prefer to speak with a support specialist over the phone,
              you can contact us using our phone support service. Our support
              team is available during regular business hours, and we&apos;ll be
              happy to assist you with any questions or concerns you may have.
            </p>
            <ContactDetail />
          </PhoneSupport>
        </ServiceContent>
        <Contactcontainer>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ fontWeight: "600", fontSize: 32 }}>
              Send us a message
            </h4>
            <p>Schedule a call or meeting with us in few clicks</p>
          </div>
          <Newsletter />
        </Contactcontainer>
        <JoinDiscord />
      </DetailSection>
    </div>
  );
};

export default Faqs;

const FaqDetail = styled.div``;

const PhoneSupport = styled.div`
  display: grid;
  padding-inline: auto;
  place-items: center;
  gap: 1rem;
`;
