module.exports = function(eleventyConfig) {
    // Copy asset directories to output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    
    // Add date filters
    eleventyConfig.addFilter("dateIso", date => {
      return date.toISOString().split('T')[0];
    });
    
    eleventyConfig.addFilter("dateReadable", date => {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });
    
    // Create a posts collection
    eleventyConfig.addCollection("posts", function(collectionApi) {
      return collectionApi.getFilteredByGlob("posts/*.md");
    });
    
    return {
      pathPrefix: "/this-is-hannah/",
      dir: {
        input: ".",
        output: "_site",
        includes: "_includes"
      }
    };
  };