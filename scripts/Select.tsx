import * as React from 'react';

export default class Select extends React.Component<any, any> {
  constructor(prop) {
    super(prop);
    this.state = {
      value: this.props.value? this.props.value: 1,
    };
  }

  render() {
    return (
      <select
        value={this.state.value}
        onChange={this.onChange}
      >
        {this.props.list.map((item) => (
          <option key={item.id} value={item.id}>{item.label}</option>
        ))}
      </select>
    );
  }

  onChange = (e) => this.setState({value: parseInt(e.target.value)});
}
