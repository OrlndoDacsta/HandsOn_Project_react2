import "../style.css";
const Navlogo = ({ logo }) => {
  return (
    <div className="navbar-logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Navlogo;
