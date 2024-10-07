import axios from "axios";

const CLIENT_ID = "nowksGWCmxa5rgXXbp5_"; // 클라이언트 ID
const CLIENT_SECRET = "3piTyrE0nQ"; // 클라이언트 Secret
const API_URL = "https://openapi.naver.com/v1/search/shop.json"; // 네이버 쇼핑 검색 API URL

export const fetchProducts = async (query: string) => {
  try {
    const response = await axios.get(API_URL, {
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
