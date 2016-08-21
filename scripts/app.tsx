import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppBar, FlatButton, Dialog, SelectField, MenuItem, DatePicker} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Select from './Select.tsx';

export default class App extends React.Component<any, any> {
  constructor(prop) {
    super(prop);
    this.state = {
      isDialogOpen: false,
    };
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  render() {
    return (
        <div>
          <AppBar
            title='マテリアルUIサンプル'
            iconElementRight={
              <FlatButton label='ダイアログ' onClick={this.handleClick.bind(this) } />
            }
          />
          <div style={{ margin: '200px 0 0 0', textAlign: 'center'}}>
            <h1>ダイアログ使ってみた</h1>
            <Dialog
              modal={true}
              title='Sample dialog'
              actions={[
                <FlatButton label='閉じる' onClick={this.handleCloseClick.bind(this) } />
              ]}
              open={this.state.isDialogOpen}>
              <p>ダイアログを出してみた</p>
            </Dialog>
          </div>
          <Select
            value={2}
            list={[
              {id: 1, label: 'aaa'},
              {id: 2, label: 'bbb'},
              {id: 3, label: 'ccc'}
            ]}
          />
        </div>
    );
  }

  handleClick() {
    this.setState({
      isDialogOpen: true
    });
  }

  handleCloseClick() {
    this.setState({
      isDialogOpen: false
    });
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
