import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LargeText = styled.span`
  font-size: 2.3em;
  color: #003b72;
`;

const SmallText = styled.span`
  font-size: 0.75em;
`;

export default ({ interest, repayment }) => (
  <Row>
    <Column>
      <LargeText>{interest}%</LargeText>
      <SmallText>Interest rate</SmallText>
    </Column>
    <Column>
      <LargeText>£{Math.round(repayment)}</LargeText>
      <SmallText>Monthly repayment</SmallText>
    </Column>
  </Row>
);
