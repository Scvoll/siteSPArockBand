import React from 'react'
import oleg from '../../static/photos/oleg.jpg'
import rodion from '../../static/photos/rodion.jpg'
import roman from '../../static/photos/roman.jpg'
import vlad from '../../static/photos/vlad.jpg'

export const General = () => {
    return (
        <div className='general'>
            <div className='overview'>
                <h1>Квартет им. Достоевского</h1>
                <h3>КиД - это четверо интеллигентов,
                    которые ведут себя на сцене, как шаманы в трансе.
                    Это поюще-декламирующая экспрессия. Это романтичные
                    и одновременно жестокие песни. Подача так же безумна,
                    как и оправдана. Поэзия песен - больна и мрачна,
                    как и любой путь к свету. </h3>
            </div>
            <ul>
                <li>
                    <img src={oleg}/>
                    <div>
                        <h1>Олег Иванцов</h1>
                        <h3>Вокал, гитара, основатель группы</h3>
                    </div>
                </li>
                <li><img src={rodion}/>
                    <div>
                        <h1>Родион Иконников</h1>
                        <h3>Гитара, бэк-вокал</h3>
                    </div>
                </li>
                <li><img src={roman}/>
                    <div>
                        <h1>Роман Чорыев</h1>
                        <h3>Бас-гитара</h3>
                    </div>
                </li>
                <li><img src={vlad}/>
                    <div>
                        <h1>Влад Захаров</h1>
                        <h3>Ударные</h3>
                    </div>
                </li>
            </ul>
        </div>
    )
};