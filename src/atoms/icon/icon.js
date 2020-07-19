const icon = (fileName) => {
  const i = require(`./${fileName}.html`).replace(
    '<svg',
    `<svg class="a-ico a-ico--${fileName}"`
  );
  return i;
};

export default icon;
