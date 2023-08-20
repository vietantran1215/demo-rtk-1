import { useSelector } from "react-redux";

const Title = () => {
  const title = useSelector(state => state.content.title);
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
 
export default Title;