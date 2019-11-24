export const drumPlay = (url, id) => {
  const sound = new Audio(url);
  sound.play();
  return {
    type: "HIT_THE_BEAT",
    id
  };
};
