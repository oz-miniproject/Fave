import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // 네이버 API 요청
        const fetchImages = async () => {
            try {
                const response = await axios.get("YOUR_NAVER_API_ENDPOINT", {
                    headers: {
                        "X-Naver-Client-Id": "YOUR_CLIENT_ID",
                        "X-Naver-Client-Secret": "YOUR_CLIENT_SECRET"
                    }
                });
                setImages(response.data.items);  // 응답 데이터를 이미지로 설정
            } catch (error) {
                console.error("Error fetching data from Naver API", error);
            }
        };

        fetchImages();
    }, []);

    // 슬라이드 옵션 설정
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.link} alt={image.title} />
                </div>
            ))}
        </Slider>
    );
}
