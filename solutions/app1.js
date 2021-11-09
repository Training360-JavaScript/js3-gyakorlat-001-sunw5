const removeDuplicatesFromArray = (arrOriginal) => {
  const uniqueArray = [];

  arrOriginal.forEach((cv) => {
    if (uniqueArray.some((v) => v === cv)) return;
    uniqueArray.push(cv);
  });

  return uniqueArray;
};

// export default removeDuplicatesFromArray
export { removeDuplicatesFromArray as default };
