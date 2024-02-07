// src/components/VideoSection.tsx

interface VideoSectionProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnailSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc,
  title,
  subtitle,
  description,
  thumbnailSrc,
}) => {
  return (
    <div className="bg-gray-200 p-8">
      <h2 className="text-3xl font-bold mb-2 text-center">{title}</h2>
      <h3 className="text-xl font-semibold mb-4 text-center">{subtitle}</h3>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
          <a href={videoSrc} target="_blank" rel="noopener noreferrer">
            <img
              src={thumbnailSrc}
              alt="Video Thumbnail"
              className="w-full h-auto cursor-pointer"
            />
          </a>
        </div>
        <p className="text-gray-700 text-justify md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
