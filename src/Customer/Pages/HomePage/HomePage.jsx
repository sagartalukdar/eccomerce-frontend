import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/HomeCarousel'
import HomeSectionCarousel from '../../Components/HomeCarousel/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../Components/Data/MensKurta'

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>

      <div className="space-y-10 py-10 flex flex-col justify-center ">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
      
    </div>
  )
}

export default HomePage
