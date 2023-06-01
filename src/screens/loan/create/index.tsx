import React from "react";
import { Federated } from '@callstack/repack/client';
import { PageWrapper } from "@poc/ui";
import { ThemeBase } from "@poc/theme";
import { IRepackMicrofront } from "@poc/interfaces";
import { useNavigation } from "@react-navigation/native";

const LoanCreateRepack = React.lazy(() => Federated.importModule<IRepackMicrofront>('repackloan', './Create'));

export const LoanCreateScreen = () => {
  const navigation = useNavigation();
  return (
    <React.Suspense fallback={<PageWrapper theme={ThemeBase.Midway} loading={true} children='' />}>
      <LoanCreateRepack
        theme={ThemeBase.Midway}
        callBack={navigation.goBack}
      />
    </React.Suspense>
  );
};