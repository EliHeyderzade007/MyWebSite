import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

function Second() {
    useEffect(() => {
        document.querySelectorAll(".sb").forEach(e => {
            e.addEventListener('click', () => {
                window.location.href = e.attributes.href.value;
            })})
            console.log(window);
    }, [])
    
    return (
        <div className="container-2">
            <div className="sosialSebeke">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className='swiperSlide'>
                        <a href='https://api.whatsapp.com/send?phone=+994552831679' target='_blank' title='WhatsApp' className=" sb wp">
                            <img className='sosial-icon' src="/img/whatsapp.svg" alt="WhatsApp İkonu" onError={(e) => { e.target.onerror = null; e.target.src = "/img/default.svg"; }} />
                        </a>
                        <a href='https://www.instagram.com/07_astara_007/' target='_blank' title='Instagram' className=" sb insta">
                            <img className='sosial-icon' src="/img/instagram.svg" alt="Instagram İkonu" onError={(e) => { e.target.onerror = null; e.target.src = "/img/default.svg"; }} />
                        </a>
                        <a href='https://t.me/AliHeyderzade007' target='_blank' title='Telegram' className=" sb tg">
                            <img className='sosial-icon' src="/img/telegram.svg" alt="Telegram İkonu" onError={(e) => { e.target.onerror = null; e.target.src = "/img/default.svg"; }} />
                        </a>
                        <a href='https://www.facebook.com/AliHeyderzade1679' target='_blank' title='Facebook' className=" sb face">
                            <img className='sosial-icon' src="/img/facebook.svg" alt="Facebook İkonu" onError={(e) => { e.target.onerror = null; e.target.src = "/img/default.svg"; }} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <a href='https://www.threads.net/@07_astara_007' target='_blank' title='Threads' className=" sb threads">
                            <img className='sosial-icon' src="/img/threads.svg" alt="Threads İkonu" onError={(e) => { e.target.onerror = null; e.target.src = "/img/default.svg"; }} />
                        </a>
                        <a href='https://www.tiktok.com/@07_astara_007?lang=TR' target='_blank' title='TikTok' className=" sb tt">
                            <img className='sosial-icon' src="/img/tiktok.svg" alt="TikTok İkonu" onError={(e) => { e.target.onerror = null; e.target.src = "/img/default.svg"; }} />
                        </a>
                        <a href='https://github.com/EliHeyderzade007' target='_blank' title='GitHub' className=" sb github">
                            <img className='sosial-icon' src="/img/github.svg" alt="GitHub İkonu" onError={(e) => { e.target.onerror = null; e.target.src = "/img/default.svg"; }} />
                        </a>
                        <a href='https://www.linkedin.com/in/%C9%99li-heyd%C9%99rzad%C9%99-13119a2a4/' target='_blank' title='LinkedIn' className=" sb in">
                            <img className='sosial-icon' src="/img/linkedin.svg" alt="LinkedIn İkonu" onError={(e) => { e.target.onerror = null; e.target.src = "/img/default.svg"; }} />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Second;
