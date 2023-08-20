import { useSelector } from "react-redux";

const Paragraph = () => {
  const paragraph = useSelector(state => state.content.paragraph);
  return (
    <p>{paragraph}</p>
  );
}
 
export default Paragraph;