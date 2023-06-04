import React from "react";
import { Federated } from '@callstack/repack/client';
import { PageWrapper } from "@poc/ui";
import { ThemeBase } from "@poc/theme";
import { IGlobalState, IRepackMicrofront } from "@poc/interfaces";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const LoanCreateRepack = React.lazy(() => Federated.importModule<IRepackMicrofront>('repackloan', './Create'));

export const LoanCreateScreen = () => {
  const navigation = useNavigation();
  const theme = useSelector((state:IGlobalState) => state.theme.value)
  return (
    <React.Suspense fallback={<PageWrapper theme={theme} loading={true} children='' />}>
      <LoanCreateRepack
        theme={theme}
        callBack={navigation.goBack}
      />
    </React.Suspense>
  );
};