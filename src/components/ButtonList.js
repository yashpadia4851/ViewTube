import { Link } from "react-router-dom";

const ButtonList = ({ name }) => {
  return (
    <>
    <Link className="shrink-0" to={"/results?search_query=" + name}>
      <button className="hover:bg-[#3F3F3F] bg-[#2a2929] duration-200 m-2 px-3 py-1 rounded-lg">
        {name}
      </button>
    </Link>
    </>
  );
};

export default ButtonList;
