import PostContent from "./PostContent"; 
function Post(){
    return(
        <>
        <div style={{margin:'1px',backgroundColor:"gray",width:'100%'}}>
            <center><h1>BLOGSPOT</h1></center>
        </div>
        <div>
            <PostContent />
        </div>
       </> 
    );
}
export default Post;

