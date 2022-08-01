import service from "./service"
export const getList = () => service({
  method: 'get',
  url: `pokemon/?limit=9999999`
});
export const getPokemon = (url) => service({
  method: 'get',
  url: url
});