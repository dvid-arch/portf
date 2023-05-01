
const Hero = () => {
    return (
        <div className="flex flex-col space-y-12 items-center my-[40px] justify-between md:flex-row  items-center md:my-[100px]">
            <div className="text-center md:w-1/2 md:text-start flex flex-col space-y-6">
                <h1 className="text-second text-[28px] uppercase tracking-[3px] text-white md:text-[40px]">hi, <span style={{ backgroundColor: 'rgb(248, 29, 138)' }}>welcome</span> to your favorite <span style={{ backgroundColor: 'rgb(253, 181, 13)' }}>web-dev</span> brand on the <span style={{ backgroundColor: 'rgb(103, 22, 244)' }}>internet</span></h1>
                <p className="text-second text-[1.3em]">I am a webdeveloper with strengths in developing amazing frontend for web-applications. i also have fair understanding of backend as i have used node.js in several projects that performs CRUD operations</p>
                <p>currently do not have a job and would like to take your offers</p>
            </div>

            <div className="picBox py-6 px-4 border-[3px] mx-8 w-full md:w-1/2 rounded-[24px]">
                <div className="p-4 border w-fit mx-auto">
                    <div className="flex space-x-6"><span>01</span><code>&lt;stack&gt;</code></div>

                    <div className="flex space-x-12 text-yellow"><span>01</span><code>&lt;JavaScript /&gt;</code></div>
                    
                    <div className="flex space-x-12 text-yellow"><span>01</span><code>&lt;react /&gt;</code></div>

                    <div className="flex space-x-12 text-purple"><span>01</span><code>&lt;node.js /&gt;</code></div>

                    <div className="flex space-x-12 text-pink"><span>01</span><code>&lt;Typescript /&gt;</code></div>
                    
                    <div className="flex space-x-12 text-pink"><span>01</span><code>&lt;Next.js /&gt;</code></div>
                    <div className="flex space-x-12 text-second"><span>01</span><code>&lt;bootstrap /&gt;</code></div>
                    <div className="flex space-x-12 text-second"><span>01</span><code>&lt;tailwindcss /&gt;</code></div>

                    <div className="flex space-x-6"><span>01</span><code>&lt;stack /&gt;</code></div>
                </div>
            </div>

        </div>
    )
}

export default Hero


{/* <div className='mx-[2rem] md:w-1/2 flex items-center justify-center'>
                <a href="#" className='large--button uppercase text-[2em] inline-grid aspect-square bg-white text-black px-[2rem] place-items-center rounded-full relative z-[1]'>Explore</a>
            </div> */}