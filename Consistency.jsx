/* @flow */
import React from 'react'

type Props<T> = {
  alpha: T;
  beta: T;
}

export class Consistency<T> extends React.Component<void, Props<T>, void> {
  props: Props<T>;

  render() {
    return <div>{this.props.alpha} : {this.props.beta}</div>
  }
}

export default Consistency

