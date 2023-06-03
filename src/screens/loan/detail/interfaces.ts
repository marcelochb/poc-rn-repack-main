import { LoanEntity } from "@poc/core";
import { RouteProp } from "@react-navigation/native";

type ILoanRepackDetailNavigationParams ={
  params: {
    data: LoanEntity;
  }
}

export type ILoanRepackDetailNavigationRoute = RouteProp<ILoanRepackDetailNavigationParams, 'params'>;