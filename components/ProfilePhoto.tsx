import Image from 'next/image';
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const ProfilePhoto: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div >
      <Image src={src} alt={alt} width={250} height={200} className="rounded-full"/>
    </div>
  );
};

export default ProfilePhoto;
