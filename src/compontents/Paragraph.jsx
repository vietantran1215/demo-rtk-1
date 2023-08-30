import { useSelector } from "react-redux";

const Paragraph = () => {
  // Lắng nghe một state ở trên Redux
  // Nhận vào 1 Callback có param là state. Giá trị callback return chính là state mà component muốn lắng nghe
  // Trong ví dụ này, component lắng nghe paragraph của content
  const paragraph = useSelector(state => state.content.paragraph);
  return (
    <p>{paragraph}</p>
  );
}
 
export default Paragraph;