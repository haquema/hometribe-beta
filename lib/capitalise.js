const capitalise = (word) => {
  let capitalisedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalisedWord;
}

export { capitalise }