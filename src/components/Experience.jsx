import { useState } from "react"

const Experience = () => {
    const [exToDisplay,setExToDisplay] = useState('first')
    let exObject = {
        first: {
            title: 'Lorem ipsum dolor sit',
            jobList: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam?",
            ]
        },
        second: {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            jobList: [
                "Lorem ipsum dolor sit amet consectetur",
                "Lorem ipsum dolor sit amet consectetur ",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam?",
                "Lorem ipsum dolor ",
            ]
        }
    }

    function handleClick(e){
        setExToDisplay(e.target.getAttribute('id'))
    }

  return (
    <div className="xs:grid xs:grid-cols-2 sm:grid-cols-3 gap-4">
      <div className="line  border-b-[2px] xs:border-b-[0] xs:border-l-[2px] border-white flex xs:flex-col overflow-scroll xs:overflow-visible scroll">
        <div className="h-[100px] w-full bg-pink mb-[-2px] border-b-[2px] xs:ml-[-2px] xs:border-l-[2px] xs:border-b-[0] border-purple min-w-[120px] text-center p-2" id="first" onClick={handleClick}>
            first work experience
        </div>
        <div className="h-[100px] w-full bg-second text-main mb-[-2px] xs:ml-[-2px] xs:border-l-[2px] xs:border-b-[0] border-purple min-w-[120px] p-2 text-center" id="second" onClick={handleClick}>
            second work experience
        </div>
      </div>

      <div className="text-[1.1rem] sm:col-span-2">
        <h1 className="text-bold text-[24px] mb-4">{exObject[exToDisplay].title}</h1>
        <ul>
            {exObject[exToDisplay].jobList.map((text,i)=><li key={i.toString()} className='mb-2'>
                {text}
        </li>)}
        </ul>
        
      </div>
    </div>
  )
}

export default Experience
