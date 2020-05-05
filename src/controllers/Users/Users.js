import sequelize from 'sequelize';

import models from '../../models';

const createUser = async (req, res) => {
  try {
    const userBody = req.body.user;
    await models.User.create(userBody);
    return res.status(200).send({
      success: true,
      message: 'User creatd Successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Unable create user',
    });
  }
};
export { createUser };
