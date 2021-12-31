import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full mb-2 bg-slate-800 text-slate-200 p-2 rounded-b static flex items-center gap-2">
      <Link to="/" className="text-2xl">
        ولْيَسْتَعْفِف
      </Link>
      <Link
        to="/add"
        className="hover:bg-slate-600 rounded hover:transition-all duration-200 p-1"
      >
        أضف مقولة
      </Link>
      <Link
        to="/about"
        className="hover:bg-slate-600 rounded hover:transition-all duration-200 p-1"
      >
        عن المشروع
      </Link>
    </div>
  );
}

export default Navbar;
