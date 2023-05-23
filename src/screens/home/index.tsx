import React from 'react'
import { TemplateMainHome } from '@poc/templates'
import { ThemeBase } from '@poc/theme'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <TemplateMainHome
      theme={ThemeBase.Midway}
      title="POC Repack Microfront"
      labelFirstButton="Pagamentos"
      onPressFirstButton={() => {}}
      labelSecondButton="Empréstimos"
      onPressSecondButton={() => navigation.navigate('Loan Repack')}
      labelThirdButton="Pix"
      onPressThirdButton={() => {}}
      isChecked={true}
      onClickMidway={() => {}}
      onClickRiachuelo={() => {}}
    />
  )
}
