const bcrypt = require('bcrypt');

const comparePasswords = async (newPassword, hashedPassowrd) => {
  try {
    return await bcrypt.compare(newPassword, hashedPassowrd);
  } catch (error) {
    console.error(`Erro ao comparar as senhas ${error}`);
  }
};

const hashPassword = async (password) => {
  try {
    const salt = 10;
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.error(`Erro ao gerar hash ${error}`);
  }
};

module.exports = {
  comparePasswords,
  hashPassword,
};