import React from 'react'
import { TemplateMainHome } from '@poc/templates'
import { ThemeBase } from '@poc/theme'

export const Home = () => {
  return (
    <TemplateMainHome
      theme={ThemeBase.Midway}
      title="POC Repack Microfront"
      labelFirstButton="Pagamentos"
      onPressFirstButton={() => {}}
      labelSecondButton="Empréstimos"
      onPressSecondButton={() => {}}
      labelThirdButton="Pix"
      onPressThirdButton={() => {}}
      isChecked={true}
      onClickMidway={() => {}}
      onClickRiachuelo={() => {}}
    />
  )
}
