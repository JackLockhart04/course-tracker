const MainButtonWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grow flex text-white rounded bg-blue-700 hover:bg-blue-500">
      {children}
    </div>
  );
};

export default MainButtonWrapper;
