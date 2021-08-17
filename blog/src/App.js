import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '종각역 돈까스 맛집';
  let fontStyle = { color : 'blue', fontSize : '20px'};

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {color : 'yellow', fontSize : '30px'} }>개발 Blog</div>
      </div>
      <img src={ logo } width='20%' />
      <h4 style={fontStyle}> { posts } </h4>
    </div>
  );
}

export default App;
