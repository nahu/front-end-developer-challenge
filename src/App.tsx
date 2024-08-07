import React from 'react';
import GlobalStyle from '@/components/GlobalStyle';
import RuneCalculator from '@/components/RuneCalculator';
import { MAX_POINTS } from '@/constants';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RuneCalculator maxPoints={MAX_POINTS} />
    </>
  );
};

export default App;
