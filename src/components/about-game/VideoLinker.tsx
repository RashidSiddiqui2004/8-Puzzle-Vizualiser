import React from 'react';

interface VideoLinkerProps {
    src: string;
    title: string;
}

const VideoLinker: React.FC<VideoLinkerProps> = ({ src, title }) => {
    return (
        <div className="flex justify-center items-center mx-[15vw] text-center bg-gray-950 p-4  max-w-3xl rounded-lg shadow-md">
            <iframe
                className="w-full max-w-3xl aspect-video rounded-lg border-2 border-gray-700"
                src={src}
                title={title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
            ></iframe>
        </div>
    );
};

export default VideoLinker;
