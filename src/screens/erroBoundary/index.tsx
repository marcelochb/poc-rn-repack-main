import { ITheme } from '@poc/interfaces';
import { ThemeBase } from '@poc/theme';
import { PageWrapper } from '@poc/ui';
import React from 'react';
import {StyleSheet} from 'react-native';

type Props = {
  children: React.ReactNode;
  name: string;
  theme: ITheme;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  name: string;
  theme: ITheme;

  constructor(props: Props) {
    super(props);
    this.name = props.name;
    this.theme = props.theme;
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <PageWrapper theme={this.theme} error errorText={`Failed to load ${this.name}`}
        
        >

        </PageWrapper>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default ErrorBoundary;