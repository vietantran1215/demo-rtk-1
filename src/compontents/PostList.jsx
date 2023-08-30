import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../store/slices/post.slice";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  
  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch(setPosts({
      posts: data
    }));
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {JSON.stringify(posts)}
    </>
  );
}

export default PostList;