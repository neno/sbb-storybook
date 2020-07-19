const fileLoaderRule = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
};

module.exports = async ({ config }) => {
  /* Find the matching JavaScript module rule  */
  const jsRule = config.module.rules.find((rule) => '.js'.match(rule.test));

  if (jsRule) {
    const options = jsRule.use[0].options;
    /* Ensure the rule has presets */
    if (!options.hasOwnProperty('presets')) {
      options.presets = [];
    }

    /* Add Babel’s preset-react to the rule’s presets */
    options.presets.push('@babel/preset-react');
  }

  const jsRule2 = config.module.rules.find((rule) => '.png'.match(rule.test));

  if (jsRule2) {
    console.log('HAS jsRule2', jsRule2);
  } else {
    console.log('NO jsRule2');
  }

  return config;
};
