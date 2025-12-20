const TeamCard = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">
      {children}
    </div>
  );
};

export default TeamCard;
