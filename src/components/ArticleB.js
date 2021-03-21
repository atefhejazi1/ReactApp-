

export const ArticalTitle = ({title}) => (<h1>{title}</h1>);
export const Pargraph = ({text}) => (<p>{text}</p>);




const ButtonAlert = (title,body)=>{ 
    alert(title + " \n " + body)  
};

const ArticleB = ({title, body})=> (
    <article className="artical">
      <ArticalTitle title={title}/>
      { body? <p>{body}</p>: '' }
     
       <button onClick={()=>  ButtonAlert(title,body)}>Click Here</button>
      </article>);



export default ArticleB;