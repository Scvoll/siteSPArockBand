import React from 'react'
import pickOne from '../../static/images/sale/pickOne.jpg'
import pickTwo from '../../static/images/sale/pickFour.jpg'
import pickThree from '../../static/images/sale/pickThree.jpg'
import pickFour from '../../static/images/sale/pickTwo.jpg'
import poster from '../../static/images/sale/poster.jpg'

export const Sale = () => {
    return (
        <div className="sale">
            <div className="saleTitle">Медиаторы<p>Цена: 100 рублей</p></div>
            <ul>
                <li><img src={pickOne}/></li>
                <li><img src={pickFour}/></li>
                <li><img src={pickThree}/></li>
                <li><img src={pickTwo}/></li>


            </ul>
            <div className="saleTitle">Постеры<p>Скоро!</p></div>
            <div><img src={poster}/></div>
        </div>
    )
};