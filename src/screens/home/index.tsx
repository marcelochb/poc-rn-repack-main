import React from 'react'
import { TemplateMainHome } from '@poc/templates'
import { ThemeBase } from '@poc/theme'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/slice';
import { IGlobalState } from '@poc/interfaces';

export const Home = () => {
  const navigation = useNavigation<any>();
  const theme = useSelector((state:IGlobalState) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <TemplateMainHome
      theme={theme}
      title="POC Repack Microfront"
      labelButton="Empréstimos"
      onPressed={() => navigation.navigate('Loan List Repack')}
      isChecked={theme.name == 'Midway'}
      onClickMidway={() => dispatch(changeTheme(ThemeBase.Midway))}
      onClickRiachuelo={() => dispatch(changeTheme(ThemeBase.Riachuelo))}
    />
  )
}
