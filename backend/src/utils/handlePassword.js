const bcrypt = require('bcrypt');

const comparePasswords = async (inputPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(inputPassword, hashedPassword);
  } catch (error) {
    console.error(`Erro ao comparar as senhas ${error}`);
  }
};

const hashPassword = async (passowrd) => {
  try {
    const salt = 10;
    return await bcrypt.hash(passowrd, salt);
  } catch (error) {
    console.error(`Erro ao gerar hash ${error}`);
  }
};

module.exports = {
  comparePasswords,
  hashPassword,
};