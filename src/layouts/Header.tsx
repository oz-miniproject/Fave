import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <button className="btn__font1" onClick={() => navigate("/")}>
        메인
      </button>
      <button className="btn__font1" onClick={() => navigate("/list")}>
        리스트
      </button>
      <button className="btn__font1" onClick={() => navigate("/detail")}>
        디테일
      </button>
    </>
  );
}
