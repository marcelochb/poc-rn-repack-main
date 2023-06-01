import React, { ComponentType } from "react";
import { Federated } from '@callstack/repack/client';
import { PageWrapper } from "@poc/ui";
import { ThemeBase } from "@poc/theme";
import { useNavigation } from "@react-navigation/native";
import { IRepackMicrofront } from "@poc/interfaces";

const LoanListRepack = React.lazy(() => Federated.importModule<IRepackMicrofront>('repackloan', './List'));

export const LoanListScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <React.Suspense fallback={<PageWrapper theme={ThemeBase.Midway} loading={true} children='' />}>
      <LoanListRepack 
        theme={ThemeBase.Riachuelo}
        callBack={() => navigation.navigate('Loan Create Repack')}
      />
    </React.Suspense>
  );
};