import {React, useEffect} from 'react'
import './Distribution.scss'
import venezuela from './assets/venezuela.png'
import {DISTRIBUTION_CITIES, DISTRIBUTION_STORES} from './data/distribution'
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel'
import StoreCard from './components/StoreCard/StoreCard'

function Distribution() {
  const storeCardList = [];

  // useEffect(()=>{
    DISTRIBUTION_STORES.forEach(el => {
      storeCardList.push(<StoreCard key={el.id} index={el.id} background={el.storeImg} title={el.name} subtitle={el.city}/>)
    })
  // },[])

  return (
    <section className='distribution'>
        <h2 className='subtitle'>Distribution</h2>
        <div className="flex justify-content-center">
            <img src={venezuela} alt="Venezuela's Map distribution" />
        </div>
        <div className="flex flex-wrap align-items-center justify-content-around distribution__list">
          {Object.values(DISTRIBUTION_CITIES).map(el => (
            <p>{el}</p>
          ))}
        </div>
        <div className="distribution__stores">
          <CustomCarousel items={storeCardList}/>
        </div>
    </section>
  )
}

export default Distribution