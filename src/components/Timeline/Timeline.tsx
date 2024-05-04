import { useState } from "react";

function Timeline({ ...props }): JSX.Element {
  const [data] = useState<any[]>(props.data);   
  
  return (
    <div className='timeline mt-8'>
      {data?.map((item: any, index: number) => (
        <div key={index} className='timeline-item flex flex-row-2'>
          <div className='timeline-marker flex flex-col items-center'>
            <div className='timeline-marker-circle flex flex-col items-center justify-center rounded-full bg-slate-600 w-6 h-6 flex-shrink-0'>
              <div className='rounded-full bg-emerald-400 w-2 h-2'></div>
            </div>
            <div
              className={`timeline-marker-line dark:bg-slate-600 w-1 h-full ${
                index === data.length - 1 ? "hidden" : ""
              }`}></div>
          </div>
          <div className='timeline-content flex flex-col pl-4 pb-8 overflow-hidden hover:pl-8 hover:scale-105 duration-300 cursor-pointer'>
            <h2 className='flex flex-col items-start text-xl font-medium mb-2 md:flex-row md:items-center'>
              <span>{item.name}</span>
              <span className='text-gray-500 text-sm ml-0 md:ml-2'>
                ({item.startDate} - {item.endDate})
              </span>
            </h2>
            <p className='text-lg text-gray-600'>{item.description}</p>
            <div className='timeline-tags flex flex-wrap my-3'>
              {item.technologies.map((technology: string, index: number) => (
                <span
                  key={index}
                  className='technology text-xs rounded bg-slate-300 p-1 m-1 md:m-0 md:mr-2'>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;