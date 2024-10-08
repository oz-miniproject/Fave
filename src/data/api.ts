import axios from 'axios';

// API 호출 함수
export const fetchProducts = async (category: string) => {
  try {
    const response = await axios.get('/v1/search/shop.json', {
      params: {
        query: category, // 선택된 카테고리를 쿼리로 사용
        display: 10,
        start: 1,
      },
      headers: {
        'X-Naver-Client-Id': import.meta.env.VITE_CLIENT_ID, // 클라이언트 ID
        'X-Naver-Client-Secret': import.meta.env.VITE_CLIENT_SECRET, // 클라이언트 시크릿
      },
    });
    return response.data; // 데이터를 반환
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // 오류를 다시 던져서 호출자에게 알림
  }
};
