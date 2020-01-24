import React from 'react';

interface AppProps {
  color?: string;
};

interface AppState {
  counter?: number;
};

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <span>{this.props.color}</span>
      </div>
    );
  }
}
