import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET;

export const fetchProducts = async (query: string) => {
  try {
    const response = await axios.get('/v1/search/shop.json', {
      headers: {
        "X-Naver-Client-Id": CLIENT_ID,
        "X-Naver-Client-Secret": CLIENT_SECRET,
      },
      params: {
        query: query, // 검색할 쿼리
        display: 10, // 보여줄 결과 수 (최대 100)
        start: 1, // 시작 위치
      },
    });
    console.log("Fetched products:", response.data); // API 응답 로그 추가
    return response.data; 
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
