const MemberInfo = ({ member, centerOnMobile, tecnhicalView }) => {
  return (
    <div
      className={`${
        centerOnMobile ? "text-center sm:text-left" : "text-center"
      } ${tecnhicalView ? "text-left" : "text-center"}`}
    >
      <h4 className="text-base sm:text-lg font-semibold text-darkblue">
        {member.name}
      </h4>
      <p className="text-blue-500 text-xs sm:text-sm">{member.position}</p>
    </div>
  );
};

export default MemberInfo;
