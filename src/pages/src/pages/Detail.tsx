import axios from "axios";
import { useState } from "react";
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
interface Result {
  title: string;
  image: string;
  lprice: string;
  brand: string;
  maker: string;
}

export default function Detail() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [, setLoading] = useState<boolean>(false);

  const getShoppingAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/v1/search/shop.json`, {
        params: { query, display: 100 },
        headers: {
          "X-Naver-Client-Id": clientId,
          "X-Naver-Client-Secret": clientSecret,
        },
      });
      console.log(response.data);
      const data = response.data.items;

      if (!data || data.length === 0) {
        console.log("No items found for the given query.");
      } else {
        console.log("Items: ", data);
      }
      setResults(data);
    } catch (error) {
      console.error("fetching error for API", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={getShoppingAPI}>🔍</button>

      <div className="detail-page-container">
        {results?.map((item, i) => (
          <>
            <div key={i}></div>
            <div className="detail-img-container">
              <img src={item.image} />
            </div>
            {/* <div className='detail-img-slide'></div> */}
            <div className="detail-info-container">
              <h2 className="prduct-name">{item.title}</h2>
              <div className="product-price">최저가 {item.lprice}원</div>
              <div className="brand">{item.brand}</div>
              <div className="count">
                상품 수량
                <button> - </button>
                <button> + </button>
              </div>
              <div>
                <button>장바구니</button>
                <button>구매하기</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
