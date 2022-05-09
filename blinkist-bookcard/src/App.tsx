
import './App.css';

import image from './components/atoms/Images/book.png'
import BookCard from './components/molecules/BookCard';
function App() {
  return (
   
    <div className="App" >
    <BookCard bookName='Beyond Entrepreneurship' author='Jim Collins & Bill Lazier' readTime='13-minute read'  reads='1.9k reads' image={image} />
  </div>
   
  );
}

export default App;
