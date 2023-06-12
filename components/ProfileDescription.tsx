import React from 'react';
import Image from 'next/image'

interface ProfileDescriptionProps {
  name: string;
  bio: string;
  linkedinUrl: string;
  githubUrl: string;
}

const ProfileDescription: React.FC<ProfileDescriptionProps> = ({ name, bio, linkedinUrl, githubUrl }) => {
  return (
    <div className="flex flex-col items-center ml-48">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-center mb-4">{bio}</p>
      <div className="flex space-x-4">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin-icon.png" alt="Linkedin Icon" width={50} height={50} />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Image src="/github-icon.png" alt="Github Icon" width={50} height={50} />
        </a>
      </div>
    </div>
  );
};

export default ProfileDescription;
