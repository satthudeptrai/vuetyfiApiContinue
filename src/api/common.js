import service from "./service"
export const getList = (count, page) => service({
  method: 'get',
  url: `pokemon`,
  params: {
    limit: count,
    offset: page
  }
});
export const getPokemon = (url) => service({
  method: 'get',
  url: url
});