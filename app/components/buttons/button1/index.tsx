const Button1 = ({ text = "", height = "2rem" }) => {
  return (
    <button className="relative  text-1xl transition-all  w-32  items-center justify-center group/letter overflow-hidden">
      <div className="h-[1em]">{""}</div>
      <div className="absolute flex h-[1em] top-[-0.1em] left-0  items-center">
        {text.split("").map((t, i) => (
          <span
            key={i}
            className=" group-hover/letter:even:animate-letterDown2  group-hover/letter:odd:animate-letterUp2  transition-all ease-in-out  duration-300 [animation-fill-mode:backwards]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="absolute flex h-[1em] top-[-0.1em] left-0 items-center">
        {text.split("").map((t, i) => (
          <span
            key={i + 2}
            className="even:translate-y-[-1em] odd:translate-y-[1em]  group-hover/letter:even:animate-letterDown1  group-hover/letter:odd:animate-letterUp1 transition-all ease-in-out duration-300 "
          >
            {t}
          </span>
        ))}
      </div>
    </button>
  );
};

export default Button1;
