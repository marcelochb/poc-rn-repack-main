import React, { useCallback } from 'react'
import { Federated } from '@callstack/repack/client'
import { PageWrapper } from '@poc/ui';
import { useSelector } from 'react-redux';
import { IGlobalState } from '@poc/interfaces';
import ErrorBoundary from '../../erroBoundary';
import { useNavigation } from '@react-navigation/native';
const LoanRepack = React.lazy(() => Federated.importModule('repackloan', './App'));
export const LoanApp = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value)
  const navigation = useNavigation<any>();
  const goBack = useCallback(
    () => {
      navigation.goBack();
    },[]
  )
  return (
    <ErrorBoundary name='Empréstimo' theme={theme} callBack={goBack}>
      <React.Suspense fallback={<PageWrapper theme={theme} loading={true} children='' />}>
        <LoanRepack />
      </React.Suspense>
    </ErrorBoundary>
  )
}
