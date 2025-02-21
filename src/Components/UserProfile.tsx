import Image from 'next/image';
import React from 'react';

interface IUserProfile {
    name:string,
    email:string,
    bio:string,
    website:string,
    avatar:string
}

const UserProfile = ({name, email,bio,website,avatar}:IUserProfile) => {
  return (
    <div className='bg-zinc-800/40 w-full max-w-lg md:max-w-xl lg:max-w-2xl p-6 md:p-8 flex flex-col justify-center items-center rounded-lg shadow-lg text-white mx-auto'>
      {/* Profile Picture */}
      <div className='w-32 h-32 md:w-44 md:h-44 bg-black rounded-full overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]'>
        <Image src={avatar} width={500} height={500} alt='profile' className='w-full h-full object-cover' />
      </div>

      {/* User Details */}
      <div className='mt-4 text-center space-y-2'>
        <h1 className='font-semibold text-2xl md:text-3xl'>{name}</h1>
        <p className='text-sm md:text-lg text-gray-300'>{email}</p>
        <p className='text-sm md:text-lg text-gray-400 italic'>{bio}</p>
        <a href={website} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-500 text-sm md:text-md transition duration-200'>
          {website}
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
