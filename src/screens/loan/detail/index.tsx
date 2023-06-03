import React from "react";
import { Federated } from '@callstack/repack/client';
import { PageWrapper } from "@poc/ui";
import { ThemeBase } from "@poc/theme";
import { IRepackMicrofront } from "@poc/interfaces";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ILoanRepackDetailNavigationRoute } from "./interfaces";
import { LoanEntity } from "@poc/core";

const LoanDetailRepack = React.lazy(() => Federated.importModule<IRepackMicrofront<LoanEntity>>('repackloan', './Detail'));

export const LoanDetailScreen = () => {
  const {params} = useRoute<ILoanRepackDetailNavigationRoute>();
  return (
    <React.Suspense fallback={<PageWrapper theme={ThemeBase.Midway} loading={true} children='' />}>
      <LoanDetailRepack
        theme={ThemeBase.Midway}
        data={params.data}
      />
    </React.Suspense>
  );
};