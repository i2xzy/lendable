# Lendable Front-End test

## Brief

A small interactive form with two sliders similar to the one implemented on the [www.lendable.co.uk](https://www.lendable.co.uk/) homepage.

#### Must-haves

- Implement two sliders, of which the first one should be free range (allowing values within `1000` and `20000`) and the second one should snap to multiples of 6 (between `12` and `60` months)
- The first slider should have a label indicating its value as currency
- The second slider should have a label indicating its value expressed in years (and half years, since acceptable values will be multiples of 6 months)
- Implement two displays showing the different values for interest rate and monthly repayments, which depend on the selected values according to the ranges displayed in the table below:

  **APR ranges table:**

  | Amount borrowed | APR |
  | --------------- | --- |
  | 1000-5000       | 5%  |
  | 5000-10000      | 10% |
  | 10000-15000     | 15% |
  | 15000-20000     | 20% |

- The value displayed in the monthly repayment must be calculated on the fly considering the total amount borrowed including the APR interest rate, divided by the repayment term months.

#### Nice to have

- Styling the form using whichever styles/colour schemes/fonts are desired
- Unit tests for the components/modules implemented (e.g. using Jest + Enzyme)

## Stack

- React
- create-react-app
- styled components
- SASS
- Github

## Installation and running

To install:

```
git clone git@github.com:i2xzy/lendable.git
cd lendable
npm i
```

To run:

```
npm start
```

To test:

```
npm test
```
