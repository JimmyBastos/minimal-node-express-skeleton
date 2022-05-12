const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create() {
    return celebrate({
      [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      },
    });
  },
};
