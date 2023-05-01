
const Projects = () => {
  return (
    <div className=" proj p-4 mt-[50px] mb-10  mx-auto w-fit">
      <div className="flex justify-between py-2">
        <h2>Projects</h2>
        <a href="#" className="text-yellow">...see all</a>
      </div>
      
      <div className="slides grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="h-[300px] max-w-[400px] border-[3px] p-4 ">
          <h3 className="title font-bold text-[1.2em]">Rest Country <strong className="italic">##frontend + </strong></h3>
        </div>
        <div className="h-[300px] min-w-[300] max-w-[400px] border-[3px] p-4 hidden">
          <h3 className="title font-bold text-[1.2em]">Rest Country <strong className="italic">##frontend + api</strong></h3>
        </div>
        <div className="h-[300px] min-w-[300] max-w-[400px] border-[3px] p-4 hidden">
          <h3 className="title font-bold text-[1.2em]">Rest Country <strong className="italic">##frontend + api</strong></h3>
        </div>
      </div>
     
    </div>
  )
}

export default Projects
