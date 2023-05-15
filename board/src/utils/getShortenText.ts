const getShortenText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  const shortened = text.substring(0, maxLength - 3);
  return `${shortened}...`;
};

export default getShortenText;
