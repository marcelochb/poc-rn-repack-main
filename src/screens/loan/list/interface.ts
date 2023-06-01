import { ITheme } from "@poc/interfaces";
import { ComponentType } from "react";

interface IComponentLoanListRepack {
  theme: ITheme,
  callBack: () => {}
}
export interface ILoanListRepack {
  default: ComponentType<IComponentLoanListRepack>
}