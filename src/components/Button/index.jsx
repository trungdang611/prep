const Button = ({ onClick, children, className }) => {
  return (
    <>
      <button
        className={`
          text-white
            rounded-md
            px-4
            py-2
            bg-blue-600
            ${className}
        `}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
