interface postData  {
    id:number,
    title:string,
    content:string,
    footer:string,
}
const Post = ({data:postData={    id:1,
    title:'',
    content:'',
    footer:'',}}) => {
    return ( <div>
        {data}

    </div> );
}
 
export default Post;