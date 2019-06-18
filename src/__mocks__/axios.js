module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
            title: {rendered: "1. title with post created from axios"},
        },
        {
            title: {rendered: "2. title with post created from axios"},
        },
        {
            title: {rendered: "3. title with post created from axios"},
        },
      ]
    });
  }
};