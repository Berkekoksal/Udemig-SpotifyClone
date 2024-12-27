import API_KEY from "../scripts/config.js";

//* API URL
const url =
  "https://shazam.p.rapidapi.com/search?term=the%20weekend&locale=en-US&offset=0&limit=5";
//* API options gönderilmesi gereken header'lar
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};
export default class API {
  async getPopular() {
    const data1 = await this.searchMusic("the weekend");
    const data2 = await this.searchMusic("mero");
    return [...data1, ...data2];

    /* const res = await fetch(url, options);
    const data = await res.json();
    // console.log(data.tracks.hits);
    //* Music bilgilerini görmek için bu işlemi yaptık.(Spread oparatör. Nesnenin içindekilerin hepsini item nesnesine aktardık.). item.track yapsak da olur.
    // console.log(data.tracks.hits.map((item) => ({ ...item.track })));
    const formatted = data.tracks.hits.map((item) => ({ ...item.track }));
    //* Function çağrıldığı yere veriyi döndürelim.
    return formatted; */
  }
  async searchMusic(value) {
    const searchUrl = `
  https://shazam.p.rapidapi.com/search?term=${value}&locale=en-US&offset=0&limit=10`;
    //* API isteği at - gelen cevabı işle.
    const res = await fetch(searchUrl, options);
    const searchData = await res.json();
    //* Veriyi formatla.
    const formatted = searchData.tracks.hits.map((item) => item.track);
    //* Function çağırdığı yerde veriyi döndürdük.
    return formatted;
  }
}
