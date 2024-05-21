const Button1 = ({ text = "" }) => {
  return (
    <button className="relative hover:group-odd:translate-y-3  transition-all bg-gray-50 w-32 h-10">
      {text.split("").map((t, i) => (
        <span key={i} className="bg-gray-500 m-1 group">{t}</span>
      ))}
    </button>
  );
};

export default Button1;
