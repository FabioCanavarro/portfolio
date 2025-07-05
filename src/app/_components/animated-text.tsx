import { easeOut, motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  el?: React.ElementType; // The element type can be 'p', 'h1', 'div', etc.
  className?: string;
};

const AnimatedText = ({ text, el: Wrapper = 'p', className }: AnimatedTextProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i : number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: easeOut
      }
    })
  };

  return (
    <Wrapper className={className}>
      {text.split(" ").map((word : string, i : number) => (
        <motion.span
          key={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          custom={i}
          style={{ display: 'inline-block', paddingRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </Wrapper>
  );
};

export default AnimatedText;