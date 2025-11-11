import pic1 from "./src/assets/pic1.png";
import pic2 from "./src/assets/pic2.png";
import pic3 from "./src/assets/pic3.png";
import pic4 from "./src/assets/pic4.png";

export const myData = [
  {
    image : pic1,
    title : "Components",
    description : "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."
  },
  {
    image : pic2,
    title : "JSX",
    description : "JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like."
  },
  {
    image : pic3,
    title : "State",
    description : "State is a built-in React object that is used to contain data or information about the component."
  },
  {
    image : pic4,
    title : "Props",
    description : "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation."
  },
]

export const EXAMPLES = {
  components: {
    title: 'Components',
    desc: 'Thành phần là các khối giao diện tái sử dụng trong React. Chúng được thiết kế để độc lập và có thể kết hợp linh hoạt.',
    code: `
    function LoiChao() {
      return (
        <div>
          <h1>Chào bạn!</h1>
          <p>Chào mừng bạn đến với React.</p>
        </div>
      );
    }
    `,
  },
  jsx: {
    title: 'JSX',
    desc: 'JSX cho phép viết mã giao diện dễ đọc hơn bằng cách sử dụng cú pháp HTML-like. Nó giúp việc xây dựng UI nhanh chóng và hiệu quả.',
    code: `
    function GioiThieu() {
      return (
        <div>
          <h2>Giới thiệu về React</h2>
          <p>React giúp tạo giao diện hiện đại và dễ bảo trì.</p>
        </div>
      );
    }
    `,
  },
  props: {
    title: 'Props',
    desc: 'Props là cách truyền dữ liệu giữa các thành phần trong React. Chúng làm cho giao diện có thể tùy chỉnh và linh hoạt.',
    code: `
    function HoSo({ ten, tuoi }) {
      return (
        <div>
          <h3>Thông tin cá nhân</h3>
          <p>Tên: {ten}</p>
          <p>Tuổi: {tuoi}</p>
        </div>
      );
    }
    `,
  },
  state: {
    title: 'State',
    desc: 'State cho phép các thành phần quản lý trạng thái động. Nó giúp giao diện phản hồi linh hoạt với các thay đổi.',
    code: `
    function CongTac() {
      const [bat, setBat] = React.useState(false);

      function xuLyClick() {
        setBat((bat) => !bat);
      }

      return (
        <button onClick={xuLyClick}>
          {bat ? 'Bật' : 'Tắt'}
        </button>
      );
    }
    `,
  },
};
