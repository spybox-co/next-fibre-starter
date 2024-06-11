export const formatTimeDate = (value) => {
  return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
};

export const generateToken = (length) => {
  //edit the token allowed characters
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split('');
  const result = [];
  for (let i = 0; i < length; i++) {
    const j = (Math.random() * (charset.length - 1)).toFixed(0);
    result[i] = charset[j];
  }
  return result.join('');
};
