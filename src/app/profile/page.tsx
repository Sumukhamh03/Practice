import UserProfile from '@/Components/UserProfile'
import UserProfileSkeleton from '@/Components/UserProfileSkeleton'
import React, { Suspense } from 'react'
import axios from 'axios'

interface IUserProfile {
    name:string,
    email:string,
    bio:string,
    website:string,
    avatar:string
}

const getProfileInfo = async ()=> {
  const response = await axios.get<IUserProfile>("http://localhost:3000/api/profile");
  return response.data
}

const page = async() => {

  const userInfo:IUserProfile = await getProfileInfo() 
  console.log(userInfo);
  

  return (
    <div className='bg-black px-4 text-white h-screen w-screen flex justify-center items-center'>
        <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfile name={userInfo.name} email={userInfo.email} bio={userInfo.bio} website={userInfo.website} avatar={userInfo.avatar} />
        </Suspense>
    </div>
  )
}

export default page