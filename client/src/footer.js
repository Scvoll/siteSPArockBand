import React from 'react'
import footer from '../static/images/footer.jpg'
import vk from '../static/icons/vk.png'
import insta from '../static/icons/instagram.png'
import youtube from '../static/icons/youtube.png'
import google from '../static/icons/googleplay.png'
import itunes from '../static/icons/itunes.png'


export const Footer = () => {
    return (
        <div className='footer'>
            <img src={footer}/>
            <ul>
                <li><a href='https://vk.com/kvartetdostoevskogo'><img src={vk}/></a></li>
                <li><a href='https://www.instagram.com/kvartet_im.dostoevskogo/'><img src={insta}/></a></li>
                <li><a href='https://www.youtube.com/channel/UCgudeL-wAHG1i7hr8vaIKuQ'><img src={youtube}/></a></li>

                <li><a href={'https://play.google.com/store/music/artist/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B5%D1%82_' +
                '%D0%B8%D0%BC_%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE?id=' +
                'A7xxuosdeyvd4qtifjzdm7fiayy'}><img src={google}/></a></li>

                <li><a href={'https://itunes.apple.com/ru/artist/%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B5%D1%82-' +
                '%D0%B8%D0%BC-%D0%B4%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE/' +
                '1321613046?app=music&ign-mpt=uo%3D4'}>
                    <img src={itunes}/></a></li>
            </ul>
            <h2>Designed by <a href="https://vk.com/manipulation">Albert Yurgin</a></h2>
        </div>
    )
};