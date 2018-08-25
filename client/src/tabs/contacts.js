import React from 'react'

export const Contacts = () => {
    return (
        <div className = "contacts">
            <div>
                <p>По вопросам сотрудничества и организации концертов - <span>kvartetdost@gmail.com</span></p><br/>
                Скачать актуальный технический райдер - <a href={'http://localhost:3000/get_rider'}>файл</a>
                <p>Насчёт мерча обращаться в сообщения группы
                    <a href="https://vk.com/kvartetdostoevskogo"> Вконтакте</a>, либо на почту.
                    Доставка в любой город мира по почте за ваш счёт при 100% предоплате.</p>
            </div>
            <div className="social">
                <iframe className="instagram"
                    src="//widget.instagramm.ru/?imageW=2&imageH=2&thumbnail_size=117&type=0&typetext=kvartet_im.dostoevskogo&head_show=1&profile_show=1&shadow_show=1&bg=255,255,255,1&opacity=true&head_bg=46729b&subscribe_bg=ad4141&border_color=c3c3c3&head_title="
                    allowtransparency="true" frameBorder="0" scrolling="no"> </iframe>
                <div id="vk_group"> </div>
                 <script type="text/javascript">
                    {VK.Widgets.Group("vk_group", {mode: 3, no_cover: 1, color3: '385C85'}, 57680571)}
                 </script>
            </div>
        </div>
    )
};