const AnimationText = ({ text = "" ,styles={} , lan='en'}) => {
  return (
    <div className="transition-all flex  w-fit items-center justify-center group/letter "
    style={styles}
    >
      <div className="h-[1em] relative overflow-hidden">
        <div className="h-[1em] opacity-0">{text}</div>

        <div className="absolute flex h-[1em] top-[-0.09em] left-0  items-center">
          {text.split("").map((t, i) => (
            <span
              key={i}
              className=" group-hover/letter:even:animate-letterDown2  group-hover/letter:odd:animate-letterUp2  transition-all ease-in-out  duration-300 [animation-fill-mode:backwards]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="absolute flex h-[1em] top-[-0.09em] left-0 items-center">
          {text.split("").map((t, i) => (
            <span
              key={i + 2}
              className="even:translate-y-[-1em] odd:translate-y-[1.01em]  group-hover/letter:even:animate-letterDown1  group-hover/letter:odd:animate-letterUp1 transition-all ease-in-out duration-300 [animation-fill-mode:backwards]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimationText;
