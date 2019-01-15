import React, { Component } from 'react';
import styled from 'styled-components';
import { ChevronsRight } from 'styled-icons/feather/ChevronsRight.cjs';

import QuotePreview from './QuotePreview';

const Wrapper = styled.form`
  background-color: #fff;
  width: 300px;
  padding: 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 100;
  color: #333;
`;

const Row = styled.div`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
`;

const Slider = styled.input`
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background: #e5ebf1;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #0076e3;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #0076e3;
    cursor: pointer;
  }
`;

const LargeText = styled.span`
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: #fb6320;
  color: #fee0d2;
  padding: 20px 40px;
  font-size: 18px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  border: 0;
`;

class QuoteForm extends Component {
  state = {
    amount: 1000,
    interest: 5,
    term: 12
  };

  handleChange = e => {
    let { amount, interest: newInterest } = this.state;
    if (amount >= 1000 && amount <= 5000) newInterest = 5;
    if (amount > 5000 && amount <= 10000) newInterest = 10;
    if (amount > 10000 && amount <= 15000) newInterest = 15;
    if (amount > 15000 && amount <= 20000) newInterest = 20;
    this.setState({
      [e.target.name]: parseInt(e.target.value),
      interest: newInterest
    });
  };

  render() {
    const { amount, interest, term } = this.state;

    const repayment = (amount + (amount / 100) * interest) / term;
    return (
      <Wrapper>
        <Row>
          <span>
            I want to borrow <LargeText>£{amount}</LargeText>
          </span>
          <Slider
            type="range"
            min={1000}
            max={20000}
            defaultValue={amount}
            step={100}
            onChange={this.handleChange}
            name="amount"
          />
        </Row>
        <Row>
          <span>
            Over{' '}
            <LargeText>
              {term / 12} {term > 12 ? 'years' : 'year'}
            </LargeText>
          </span>
          <Slider
            type="range"
            min={12}
            max={60}
            defaultValue={term}
            step={6}
            onChange={this.handleChange}
            name="term"
          />
        </Row>
        <QuotePreview interest={interest} repayment={repayment} />
        <Button>
          Get your qoute <ChevronsRight size="34" />
        </Button>
      </Wrapper>
    );
  }
}

export default QuoteForm;
