import clsx from "clsx";

type AnimatedNeonTextProps = {
  text: string;
  className?: string;
  delayIncrementMs?: number;
};

/**
 * Splits text into characters and staggers the color transition so each letter
 * animates to the hover color sequentially. The accessibility label is provided
 * by a visually hidden copy of the original string.
 */
export function AnimatedNeonText({
  text,
  className,
  delayIncrementMs = 25,
}: AnimatedNeonTextProps) {
  const characters = Array.from(text);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden className={clsx("inline-flex", className)}>
        {characters.map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="text-current transition-colors duration-200 group-hover:text-[#B4FF00] group-focus-visible:text-[#B4FF00]"
            style={{ transitionDelay: `${index * delayIncrementMs}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </>
  );
}
