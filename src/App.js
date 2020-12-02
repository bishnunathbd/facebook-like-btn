import logo from './logo.svg';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');

  const handleLike = () => {
    // const color = likeColor ? '' : 'primary';
    // setLikeColor(likeColor ? '' : 'primary');
  }

  return (
    <div className="App">
      <h1>Facebook Like Button</h1>
      {/* <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon> */}
      <ThumbUpAltIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
    </div>
  );
}

export default App;
