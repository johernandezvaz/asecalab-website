// src/components/CourseCard.tsx


interface CourseCardProps {
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description }) => {
  return (
    <div className="bg-red-500 p-4 mb-4">
      <h2 className="text-white text-lg font-bold mb-2 text-center">{title}</h2>
      <p className="text-white text-center">{description}</p>
    </div>
  );
};

export default CourseCard;
