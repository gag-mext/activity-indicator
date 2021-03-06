import React from 'react';
import ReactDOM from 'react-dom';
import ActivityIndicator from '../src';
import WingBlank from '@gag/wing-blank';
import WhiteSpace from '@gag/white-space';
import Button from '@gag/button';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
  }
  componentWillUnmount() {
    clearTimeout(this.closeTimer);
  }
  showToast = () => {
    this.setState({ animating: !this.state.animating });
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
    }, 1000);
  }
  render() {
    return (
      <div>
        <WingBlank>
          <div className="loading-container">
            <p className="sub-title">icon无文案</p>
            <div className="loading-example">
              <ActivityIndicator animating />
            </div>
            <WhiteSpace size="xl" />
            <p className="sub-title">icon带文案</p>
            <div className="loading-example">
              <ActivityIndicator
                text="加载中..."
              />
            </div>
            <WhiteSpace size="xl" />
            <p className="sub-title">大号icon，自定义文案样式</p>
            <div className="loading-example">
              <div className="align">
                <ActivityIndicator size="large" />
                <span style={{ marginTop: 8 }}>加载中...</span>
              </div>
            </div>
          </div>
          <div className="toast-container">
            <WhiteSpace size="xl" />
            <Button onClick={this.showToast}>点击显示 Toast</Button>
            <div className="toast-example">
              <ActivityIndicator
                toast
                text="正在加载"
                animating={this.state.animating}
              />
            </div>
          </div>
        </WingBlank>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('sk-root'));
