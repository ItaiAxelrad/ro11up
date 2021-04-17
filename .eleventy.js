// eleventy configuration
module.exports = function (eleventyConfig) {
  // Opt in to a full deep merge when combining the Data Cascade
  eleventyConfig.setDataDeepMerge(true);
  // add passthrough files
  eleventyConfig.addPassthroughCopy('src/static');
  eleventyConfig.addPassthroughCopy('src/favicon.svg');
  // Base Config
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
    passthroughFileCopy: true,
  };
};
