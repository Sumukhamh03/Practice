import React from 'react';

const UserProfileSkeleton = () => {
  return (
    <div className='bg-zinc-800/40 w-full max-w-lg md:max-w-xl lg:max-w-2xl p-6 md:p-8 flex flex-col justify-center items-center rounded-lg shadow-lg text-white mx-auto animate-pulse'>
      {/* Skeleton Profile Picture */}
      <div className='w-32 h-32 md:w-44 md:h-44 bg-gray-700 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]'></div>

      {/* Skeleton User Details */}
      <div className='mt-4 text-center space-y-2 w-full'>
        <div className='h-6 w-3/4 bg-gray-600 rounded-md mx-auto'></div>
        <div className='h-4 w-1/2 bg-gray-600 rounded-md mx-auto'></div>
        <div className='h-4 w-3/4 bg-gray-600 rounded-md mx-auto'></div>
        <div className='h-4 w-1/4 bg-gray-600 rounded-md mx-auto'></div>
      </div>
    </div>
  );
};

export default UserProfileSkeleton;