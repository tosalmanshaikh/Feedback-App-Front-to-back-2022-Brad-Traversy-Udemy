import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './components/data/FeedbackData';

function App() {

  const [feedback, setFeedbackx] = useState(FeedbackData);

  return (
    <>
    <Header />
    <div className='container'>
      <FeedbackList/>
    </div>
    </>
  )
}

export default App;

















// -> Please ignore everything below, Thank you! 

// function App() {
//   const title = "Blog Post";
//   const body = "This is my blog post";
//   const comments = [
//     { id: 1, text: "Comment one" },
//     { id: 2, text: "Comment two" },
//     { id: 3, text: "Comment three" },
//   ];

//   const loading = false;
//   const showComments = true;

//   if (loading) return <h1>Loading...</h1>


//   const commmentBlock = (        
//   <div className="comments">
//   <h3>Comments ({comments.length})</h3>

//   <ul>
//     {comments.map((comment, index)=> (
//       //never forget to add the key to the child element when you are mapping!  
//       <li key={index}>
//         {comment.text}
//       </li>
//     ))}
//   </ul>
// </div>)

//   return (
//     //always one parent element in this case <></>
//     <>
//       <div className="container">
//         <h1>{title.toUpperCase()}</h1>
//         <p>{body}</p>

//         {showComments && commmentBlock}

//       </div>

//       {/* {Math.random() * (5 + 5)} */}
//     </>
//   );
// }

// export default App;



// if we were to write the same thing as above but just using simple Javascript, you can imagine that this going to get really messy without JSX
//this would display: "My App"

// import React from 'react'

// const App = () => {
//   return (React.createElement('div', {className: 'container'},React.createElement('h1',{},'My app'))

//   )
// }

// export default App;
