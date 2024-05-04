// const Navlist = (props) => {
//   // console.log("props",data);
//   return (
//     <div className="navbar-list">
//       <a href="">{props?.data[0]}</a>
//       <a href="">{props?.data[1]}</a>
//       <a href="">{props?.data[2]}</a>
//     </div>
//   );
// };

// const Navlist = ({ data }) => {
//   // console.log("props",data);
//   return (
//     <div className="navbar-list">
//       <a href="">{data[0]}</a>
//       <a href="">{data[1]}</a>
//       <a href="">{data[2]}</a>
//     </div>
//   );
// };

const Navlist = (props) => {
  const { data, handleRedirect } = props;
  return (
    <div className="navbar-list">
      {data.map((item, idx) => (
        <a onClick={() => handleRedirect(item)} key={idx}>
          {item}
        </a>
      ))}
    </div>
  );
};
export default Navlist;

//key berfungsi untuk menghilangkan warning looping
