import React from 'react'
import {apple , bill , google} from '../assets'
import styles , {layout} from '../style'
const Billing = () =>  (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='bill' className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[3]  -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0]  -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Easily control your <br className='sm:block hidden'/>bills and invoices</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Simplify your finances with our intuitive app, designed to streamline your billing and invoicing processes. Take charge of your payments effortlessly, ensuring accuracy and efficiency in every transaction.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='applestore' className='w-[128px] h-[45px] object-contain ml-20 cursor-pointer'/>
          <img src={google} alt='google_store' className='w-[128px] h-[45px] object-contain ml-20 cursor-pointer'/>

        </div>
      </div>
    </section>
  )


export default Billing
