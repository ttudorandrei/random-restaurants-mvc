const trimDescription = (description) => {
  if (description) {
    let newDescription = description.slice(0, 150);
    return (newDescription = `${newDescription}[...]`);
  }
};

module.exports = { trimDescription };
