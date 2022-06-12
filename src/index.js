import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 값을 표시하기 위해 Square의 render 함수에서 {/* TODO */}를 {this.props.value}로 수정해주세요.

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : null,
    }
  }
  render() {
    return(
      <button 
        className='square'
        onClick={() => this.setState({value: 'X'})}
        // 컴포넌트에서 setState를 호출하면 React는 자동으로 컴포넌트 내부의 자식 컴포넌트 역시 업데이트합니다.
      >
      {this.state.value}
    </button>
    )
  }
}

// Square에 vlaue prop을 전달하기 위해 Board의 renderSquare 함수 코드를 수정해주세요.

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares : Array(0).fill(null),
      // Board에 생성자를 추가하고 9개의 사각형에 해당하는 9개의 null 배열을 초기 state로 설정해주세요.
    }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


