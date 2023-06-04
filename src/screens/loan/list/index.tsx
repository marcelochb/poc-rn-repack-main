import React, { ComponentType, useCallback } from "react";
import { Federated } from '@callstack/repack/client';
import { PageWrapper } from "@poc/ui";
import { ThemeBase } from "@poc/theme";
import { useNavigation } from "@react-navigation/native";
import { IGlobalState, IRepackMicrofront } from "@poc/interfaces";
import { LoanEntity } from "@poc/core";
import { useSelector } from "react-redux";

const LoanListRepack = React.lazy(() => Federated.importModule<IRepackMicrofront<LoanEntity>>('repackloan', './List'));

export const LoanListScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToDetail = useCallback(
    (item:LoanEntity) => {
    navigation.navigate('Loan Detail Repack', {data: item});
  },[])
  const navigateToCreate = useCallback(
    () => {
    navigation.navigate('Loan Create Repack');
  },[])
  const theme = useSelector((state:IGlobalState) => state.theme.value)

  return (
    <React.Suspense fallback={<PageWrapper theme={theme} loading={true} children='' />}>
      <LoanListRepack 
        theme={theme}
        callBack={navigateToCreate}
        callBackBy={navigateToDetail}
      />
    </React.Suspense>
  );
};