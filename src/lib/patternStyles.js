const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ratio = 0.05;

function polka(back, front, opacity = 0.8, size = 40) {
  const size2 = (size * ratio).toFixed(2);

  return {
    backgroundColor: hexToRgba(back, opacity),
    backgroundImage: `radial-gradient(${front} ${size2}px, transparent ${size2}px)`,
    backgroundSize: `${size}px ${size}px`,
  };
}

function box(back, front, opacity = 0.8, size = 40) {
  const size2 = (size * ratio).toFixed(2);
  return {
    backgroundColor: hexToRgba(back, opacity),
    backgroundImage: `linear-gradient(${front} ${size2}px, transparent ${size2}px), linear-gradient(to right, ${front} ${size2}px, transparent ${size2}px)`,
    backgroundSize: `${size}px ${size}px`,
  };
}

function lines(back, front, opacity = 0.8, size = 40) {
  const size2 = (size * ratio).toFixed(2);
  return {
    backgroundColor: hexToRgba(back, opacity),
    backgroundImage: `repeating-linear-gradient(0deg, ${front}, ${front} ${size2}px, transparent ${size2}px, transparent)`,
    backgroundSize: `${size}px ${size}px`,
  };
}

function diagonal(back, front, opacity = 0.8, size = 40) {
  const size2 = (size * ratio).toFixed(2);

  return {
    backgroundColor: hexToRgba(back, opacity),
    backgroundImage: `repeating-linear-gradient(-45deg, ${front}, ${front} ${size2}px, transparent ${size2}px, transparent ${size}px)`,
  };
}

export default { polka, box, lines, diagonal };
