import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <div className="header">
      <div className="header__logo" onClick={() => navigate("/")}>Fave</div>
      <div className="header__menu">
        <button className="header__btn" onClick={() => navigate("/")}>메인</button>
        <button className="header__btn" onClick={() => navigate("/list")}>리스트</button>
        <button className="header__btn" onClick={() => navigate("/detail")}>디테일</button>
      </div>
    </div>
  );
}
