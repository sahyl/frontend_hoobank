import React from 'react'
import {card} from '../assets'
import styles , {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Find  the best card deal<br className='sm:block hidden'/> in a few easy steps.</h2>
        <p  className={`${styles.paragraph} max-w-[470px] mt-5`}>Unlock unbeatable card deals effortlessly with our app—just a few simple steps to incredible savings. Secure the best card offers quickly and easily, making your financial management smoother than ever.</p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card'  className='w-[100%] h-[100%]'/>
      </div>
       
      
    </section>
  )


export default CardDeal
