const Button = ({ onClick, children, className }) => {
  return (
    <>
      <button
        className={`
            rounded-md
            px-4
            py-2
            text-white
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
