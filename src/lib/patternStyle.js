const style = (c) => ({
  backgroundColor: c,
  opacity: 0.8,
});

const ratio = 0.05;

function polkav(color1, color2, size = 20) {
  const size2 = (size * ratio).toFixed(2);

  return {
    ...style(color1),
    backgroundImage: `radial-gradient(${color2} ${size2}px, ${color1} ${size2}px)`,
    backgroundSize: `${size}px ${size}px`,
  };
}

function box(color1, color2, size = 20) {
  const size2 = (size * ratio).toFixed(2);
  return {
    ...style(color1),
    backgroundImage: `linear-gradient(${color2} ${size2}px, transparent ${size2}px), linear-gradient(to right, ${color2} ${size2}px, ${color1} ${size2}px)`,
    backgroundSize: `${size}px ${size}px`,
  };
}

function lines(color1, color2, size = 20) {
  const size2 = (size * ratio).toFixed(2);
  return {
    ...style(color1),
    backgroundImage: `repeating-linear-gradient(0deg, ${color2}, ${color2} ${size2}px, ${color1} ${size2}px, ${color1})`,
    backgroundSize: `${size}px ${size}px`,
  };
}

function diagonal(color1, color2, size = 20) {
  const size2 = (size * ratio).toFixed(2);

  return {
    ...style(color1),
    backgroundImage: `repeating-linear-gradient(-45deg, ${color2}, ${color2} ${size2}px, ${color1} ${size2}px, ${color1} ${size}px)`,
  };
}

export default { polkav, box, lines, diagonal };
