import React from 'react'
import { Federated } from '@callstack/repack/client'
import { PageWrapper } from '@poc/ui';
import { useSelector } from 'react-redux';
import { IGlobalState, IRepackMicrofront } from '@poc/interfaces';
import ErrorBoundary from '../../erroBoundary';
const LoanRepack = React.lazy(() => Federated.importModule('repackloan', './App'));
export const LoanApp = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value)

  return (
    <ErrorBoundary name='LoanApp' theme={theme}>
      <React.Suspense fallback={<PageWrapper theme={theme} loading={true} children='' />}>
        <LoanRepack />
      </React.Suspense>
    </ErrorBoundary>
  )
}
