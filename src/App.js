import './App.scss';
import { ArticalTitle} from './components/ArticleB';
import MyArtical from './components/ArticleB';
import logo from './assets/logo.png';
import React, { useState } from 'react';

let articalsData = [
  // {
  //   'title': "New Blog Title",
  //   "body": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  // },
  // {
  //   'title': "New Blog Title2",
  // },
  // {
  //   'title': "New Blog Title3",
  //   "body": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  // },
];

function App(props) {
const [title, setTitle] = useState("");  
const [body, setBody] = useState("");  

const handleForm =(evt) =>{
       articalsData.push( {
           title,
          body
       } )
  localStorage.setItem("articals", JSON.stringify(articalsData));
  evt.preventDefault();
}

  return (
    <div >
      <div className="flex">
        { JSON.parse(localStorage.getItem("articals")).map((e,index)=>{
            return <MyArtical key={'art-'+index} 
                      title={e.title} body={e.body} 
                       />
        })}
      </div>
      <ArticalTitle title="Hello, World" />
      <img src={logo}  width={50} />
      <img src={require('./assets/logo.png').default}  width={50} />
      <br/>
      <button onClick={()=> handleButton}>Click Here</button>
                <form onClick={handleForm}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={e =>setTitle( e.target.value)}  />
                </label>

                <label>
                    Body:
                <textarea value={body} onChange={b=>setBody( b.target.value)} />
                </label>
                <input  type="submit" value="Submit" />
      </form>
</div>
 
  );
}
const handleButton = (id)=>{ 
  alert(id.title);
};

export default App;
