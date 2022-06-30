const { schemaName } = require('./schemas/productNameSchema');

const productNameValidation = (req, res, next) => {
  const name = req.body;
  const { error } = schemaName.validate(name);

  if (!name.name) {
    return res.status(400).json({ message: error.message });
  }

  if (name.name.length < 5) {
    return res.status(422).json({ message: error.message });
  }

  return next();
};

module.exports = {
  productNameValidation,
};
