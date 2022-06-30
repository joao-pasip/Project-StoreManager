const { saleSchema } = require('./schemas/saleSchemas');

const saleValidation = (req, res, next) => {
  const { body: array } = req;
  const { error } = saleSchema.validate(array);
  if (!error) return next();
  if (error.message === '"productId" is required') {
    return res.status(400).json({ message: error.message });
  }

  if (error.message === '"quantity" is required') {
    return res.status(400).json({ message: error.message });
  }

  if (error.message === '"quantity" must be greater than or equal to 1') {
    return res.status(422).json({ message: error.message });
  }
};

module.exports = {
  saleValidation,
};
