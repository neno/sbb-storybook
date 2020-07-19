const button = (label = '', classes = [], icon = '') => {
  let cls = ['a-btn'];

  if (label && icon) {
    cls.push('btn--icon-label');
  } else if (!label && icon) {
    cls.push('btn--icon');
  }

  if (classes.length) {
    cls = [...cls, ...classes];
  }

  return `
    <button class="${cls.join(' ')}">
      ${icon}<span>${label}</span>
    </button>
  `;
};

export default button;
