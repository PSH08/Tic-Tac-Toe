import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 값을 표시하기 위해 Square의 render 함수에서 {/* TODO */}를 {this.props.value}로 수정해주세요.

class Square extends React.Component {
  render() {
    return(
      <button 
        className='square'
        onClick={() => this.props.onClick()}
        // 컴포넌트에서 setState를 호출하면 React는 자동으로 컴포넌트 내부의 자식 컴포넌트 역시 업데이트합니다.
      >
      {this.props.value}
    </button>
    )
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// Square에 vlaue prop을 전달하기 위해 Board의 renderSquare 함수 코드를 수정해주세요.

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares : Array(0).fill(null),
      xIsNext: true,
      // Board에 생성자를 추가하고 9개의 사각형에 해당하는 9개의 null 배열을 초기 state로 설정해주세요.
    }
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    if(calculateWinner(squares) || squares[i])  {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }
  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner) {
      status = 'winner: ' + winner
    }else {
      status = 'Next Player ' + (this.state.xIsNext ? 'X' : 'O')
    }

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


