import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
	const [query, setQuery] = useState<string>('');
	const [results, setResults] = useState<Result[]>([]);
	const [, setLoading] = useState<boolean>(false);
	const [counter, setCounter] = useState<number>(1);
	const navigate = useNavigate();

	const plusCount = () => {
		setCounter(counter + 1);
	};

	const minusCount = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	const paymentPage = () => {
		navigate('/payment');
	};
	const cartPage = () => {
		navigate('/cart');
	};

	const removeBoldTag = (html: string) => {
		return html.replace(/<\/?b>/g, '');
	};

	const getShoppingAPI = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`/v1/search/shop.json`, {
				params: { query, display: 1 },
				headers: {
					'X-Naver-Client-Id': clientId,
					'X-Naver-Client-Secret': clientSecret,
				},
			});
			console.log(response.data);
			const data = response.data.items;

			if (!data || data.length === 0) {
				console.log('No items found for the given query.');
			} else {
				console.log('Items: ', data);
			}
			setResults(data);
		} catch (error) {
			console.error('fetching error for API', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={getShoppingAPI}>🔍</button>

			<div className='detail-page-container'>
				{results?.map((item, i) => (
					<>
						<div key={i}></div>
						<div className='detail-img-container'>
							<img src={item.image} />
						</div>
						{/* <div className='detail-img-slide'></div> */}
						<div className='detail-info-container'>
							<h2 className='prduct-name'>{removeBoldTag(item.title)}</h2>
							<h6 className='brand'>브랜드 : {item.brand}</h6>
							<h6 className='product-price'>{item.lprice}원</h6>
							<div className='count'>
								<div className='S1'>상품 수량: {counter} 개</div>
								<button onClick={minusCount}> - </button>
								<button onClick={plusCount}> + </button>
							</div>
							<div>
								<button onClick={cartPage}>장바구니</button>
								<button onClick={paymentPage}>구매하기</button>
							</div>
						</div>
					</>
				))}
			</div>
		</>
	);
}
