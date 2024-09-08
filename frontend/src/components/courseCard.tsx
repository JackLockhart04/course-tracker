const CourseCard: React.FC<{ id: number; name: string; grade: number }> = ({
  id,
  name,
  grade,
}) => {
  return (
    <div className="h-44 flex space-x-4 items-center bg-gray-200 rounded-lg">
      <div className="h-full w-32 flex justify-center items-center border-2 border-black rounded-lg">
        <p>{name}</p>
      </div>
      <p>Grade: {grade}</p>
    </div>
  );
};

export default CourseCard;
