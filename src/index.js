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
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1]
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i])  {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      // concat() 함수는 기존 배열을 변경하지 않기 때문에 이를 더 권장합니다.
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext
    })
  }
  renderSquare(i) {
    return <Square 
      value={this.props.squares[i]} 
      onClick={() => this.props.handleClick(i)}
    />;
  }

  render() {
    return (
      <div>
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
  constructor(props) {
    super(props);
    this.state = {
      history:[{
        squares:Array(9).fill(null),
      }],
      xIsNext: true,
    }
  }
  render() {
    const history = this.state.history;
    const current = history[history - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if(winner) {
      status = 'winner: ' + winner
    }else {
      status = 'Next Player ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


