import { Link } from "react-router-dom";

function BackBtn({to}:{to: string }) {
  return (
    <Link to={to} className="back-btn"></Link>
  )
}

export default BackBtn