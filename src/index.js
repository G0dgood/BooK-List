import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Booklist(){
  return (
  <div>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
    </div>);   
}

const Book = () =><article>
  <Image/>
  <Title/>
  </article>
const Image = () =><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_HtltRZMRsgYRlMk4MspT3Ar2KTQyWUv2SQ&usqp=CAU" alt=""/>
const Title = () =><h3>This is the best selling book</h3>

ReactDom.render(<Booklist/>, document.getElementById('root'));