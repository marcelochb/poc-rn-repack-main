import React from 'react'
import { Federated } from '@callstack/repack/client'
import { PageWrapper } from '@poc/ui';
import { useSelector } from 'react-redux';
import { IGlobalState, IRepackMicrofront } from '@poc/interfaces';
const LoanRepack = React.lazy(() => Federated.importModule<IRepackMicrofront>('repackloan', './App'));
export const LoanApp = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value)

  return (
    <React.Suspense fallback={<PageWrapper theme={theme} loading={true} children='' />}>
      <LoanRepack theme={theme} />
    </React.Suspense>
  )
}
