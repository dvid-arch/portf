import styles from './styles';

// import {Navbar,Billing,Client,CTA,Footer,CardDeal,Bussiness,Hero, Stats, Testimonials,Ini, Buydata, Refer, Fund, Withdraw} from './components'

import { Header, Hero, Projects,About, Experience} from './components';
import { useState } from 'react';

const App = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  function handleMenuClick(e){
    setMenuClicked(!menuClicked)
}

function handleMenuToggle(){
  if(window.innerWidth<1060 && menuClicked==true){ setMenuClicked(false)}
}

  return <div className='container text-white mx-auto px-6 app' onClick={handleMenuToggle}>  
    <Header handleMenuClick={handleMenuClick} menuClicked={menuClicked} />
    <Hero/>
    <Projects />
    <About />
    <Experience />
    <div className='contact bg-main p-4 fixed bottom-[20px] right-[20px]'>
        say hello
    </div>
  </div>
}

export default App



/* 
// <div className='bg-primary w-full overflow-hidden'>
    //   <div className={`${styles.paddingX} ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       {/* <Navbar /> */
//     </div>
//   </div>
//   <div className={`bg-primary ${styles.flexStart}`}>
//     <div className={`${styles.boxWidth}`}>
//       {/* <Hero /> */}
//     </div>
//   </div>
//   <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//     <div className={`${styles.boxWidth}`}>

{/* <Stats />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
          <Ini />
          <Buydata/>
          <Fund />
          <Withdraw />
          <Refer /> */}
    //     </div>
    //   </div>
    // </div> */


    // <section id="colors">
    //   <h2><span>01</span></h2>
    //   <div>
    //     <div className='pt-[3rem] px-[1rem] border-brown-[3px]'>Hello</div>
    //     <ul>
    //       <h2 className='text-second uppercase tracking-[4.72px]'><span className='tracking-[3px] text-white'>01</span> colors</h2>
    //     </ul>
    //   </div>
    //   
    //     <div className='mb-[50vh] flex flex-col space-y-2'>
    //       {/* Tabs */}
    //       <div className='flex space-x-2'>
    //         <button aria-selected='true' className='uppercase text-second tracking-[2px] py-2'>Moon</button>
    //         <button aria-selected='false' className='uppercase text-second tracking-[2px] py-2'>Mars</button>
    //         <button aria-selected='false' className='uppercase text-second tracking-[2px] py-2'>Europa</button>
    //       </div>

    //       {/* Dots */}
    //       <div className="dot-indc flex">
    //         <button aria-selected='true' className='p-2'></button>
    //         <button aria-selected='false' className='p-2'></button>
    //         <button aria-selected='false' className='p-2'></button>
    //       </div>

    //       {/* Numbered indicators */}

    //       <div>
    //         <ul className='flex flex-col space-y-2'>
    //           <li className='p-2 w-[50px] h-[50px] rounded-full grid place-items-center bg-white text-black font-bold'>1</li>
    //           <li className='p-2 w-[50px] h-[50px] rounded-full grid place-items-center  text-white font-bold border-[1px] border-white hover:border-main'>2</li>
    //           <li className='p-2 w-[50px] h-[50px] rounded-full grid place-items-center  text-white font-bold border-[1px] border-white hover:border-main'>3</li>
    //         </ul>
            
    //       </div>
          
    //     </div>
    //   </div>

    // </section>