import React from "react";
import { Federated } from '@callstack/repack/client';
import { PageWrapper } from "@poc/ui";
import { ThemeBase } from "@poc/theme";
import { IGlobalState, IRepackMicrofront } from "@poc/interfaces";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ILoanRepackDetailNavigationRoute } from "./interfaces";
import { LoanEntity } from "@poc/core";
import { useSelector } from "react-redux";

const LoanDetailRepack = React.lazy(() => Federated.importModule<IRepackMicrofront<LoanEntity>>('repackloan', './Detail'));

export const LoanDetailScreen = () => {
  const {params} = useRoute<ILoanRepackDetailNavigationRoute>();
  const theme = useSelector((state:IGlobalState) => state.theme.value)
  return (
    <React.Suspense fallback={<PageWrapper theme={theme} loading={true} children='' />}>
      <LoanDetailRepack
        theme={theme}
        data={params.data}
      />
    </React.Suspense>
  );
};