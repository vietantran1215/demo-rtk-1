import { useSelector } from "react-redux";

const Title = () => {
  // Lắng nghe một state ở trên Redux
  // Nhận vào 1 Callback có param là state. Giá trị callback return chính là state mà component muốn lắng nghe
  // Trong ví dụ này, component lắng nghe title của content
  const title = useSelector(state => state.content.title);
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
 
export default Title;