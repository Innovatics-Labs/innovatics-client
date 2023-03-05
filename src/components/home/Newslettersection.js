import styled from "styled-components";
import { MaxwidthContainer } from "../GlobalStyles";
import Newsletter from "../Newsletter";

const Newslettersection = () => {
  return (
    <section>
      <Content>
        <Newsletter />
      </Content>
    </section>
  );
};

export default Newslettersection;

const Content = styled(MaxwidthContainer)`
  padding: var(--container-padding);
  background: linear-gradient(
      90.44deg,
      rgba(13, 17, 23, 0.3) 0.46%,
      #0d1117 44.88%
    ),
    url("galaxy.png");
`;
