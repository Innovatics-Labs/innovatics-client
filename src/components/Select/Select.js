import React from "react";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

import { WEIGHTS, COLORS } from "../../constants";

const Select = ({ label, value, children, ...delegated }) => {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find((child) => child.props.value === value);

  const displayedValue = selectedChild.props.children;

  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>
      <SelectWrapper>
        <NativeSelect {...delegated}>{children}</NativeSelect>
        <DisplayedBit>
          {displayedValue}
          <ChevronIcon size={24} strokeWidth={1.5} />
        </DisplayedBit>
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: baseline;
`;

const VisibleLabel = styled.span`
  color: ${COLORS.gray[700]};
  margin-right: 16px;
`;

const SelectWrapper = styled.div`
  position: relative;
  background-color: white;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const DisplayedBit = styled.span`
  display: block;
  background: ${COLORS.gray[100]};
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.gray[700]};
  padding: 12px 42px 12px 16px;
  border-radius: 8px;
  pointer-events: none;

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const ChevronIcon = styled(FiChevronDown)`
  position: absolute;
  top: 0;
  right: 9px;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`;

export default Select;
