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
      labelButton="Empréstimos"
      onPressed={() => navigation.navigate('Loan List Repack')}
      isChecked={true}
      onClickMidway={() => {}}
      onClickRiachuelo={() => {}}
    />
  )
}
