import React from 'react'

interface CampProps{
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({backgroundImage, title, subTitle, peopleJoined} : CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}`}>
      CampSite 1
    </div>
  )
}
const Camp = () => {
  return (
    <section className='border-2 border-green-500 2xl:max-container relative flex 
    flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 
      overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
        backgroundImage='bg-bg-img-1'
        title='Putuk Truno Camp'
        subTitle="Prigen, Pasuran"
        peopleJoined="50+ Joined"/>
      </div>

    </section>
  )
}

export default Camp