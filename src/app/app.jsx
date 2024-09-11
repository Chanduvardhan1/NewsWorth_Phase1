import React from 'react';
import VideoCard from './VideoCard';

const App = () => {
  const videoData = [
    {
      src: 'src/assets/Images/home/Bhaje-Vaayu-Vegam-Telugu-myt5d-2024.mp4',
      title: 'Venkatesh & Brahmanandam Ultimate Comedy | Telugu Back-to-back',
      moreImgSrc: 'src/assets/Images/dashboard/more.png',
      channelName: 'iDream Trending',
      views: '1.8M',
      uploadDate: '1 month ago'
    },
    {
      src: 'src/assets/Images/home/Another-Video.mp4',
      title: 'Another Video Title',
      moreImgSrc: 'src/assets/Images/dashboard/more.png',
      channelName: 'Another Channel',
      views: '500K',
      uploadDate: '2 weeks ago'
    },
    // Add more video objects here
  ];

  return (
    <div>
      {videoData.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default App;
