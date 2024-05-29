import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewallJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>

     <Hero title="Become a React Dev" subtitle="Find the React job that fits your skillset" />
     <HomeCards/>
     <JobListings isHome={true}/>
     <ViewallJobs/>
    </>
  )
}

export default HomePage
