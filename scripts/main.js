import API from "./api.js";
import UI from "./ui.js";

//* class örneği alınmalı methodları kullanmak için

const api = new API();
const ui = new UI();
//* Sayfa yüklendiği zaman musicleri renderla
window.addEventListener("DOMContentLoaded", () => {
  //* Ekrana loader gönder.
  ui.renderLoader();
  api
    .getPopular()
    .then((data) => {
      //* Gelen data içerisindeki her bir nesne için ekrana kartları bas.
      // console.log(data);
      ui.renderCards(data);
    })
    .catch((error) => {
      console.log(error);
      alert(`Sorry, couldn't see this website.`);
    });
});
//* Formdan müzük aratıldığında API'dan aratılan kelimeye uygun sonuçları al ve renderla.

ui.form.addEventListener("submit", (e) => {
  //* sayafayı yeneilemeyi engelle.
  e.preventDefault();
  //* detayları görmek için "log" yerine "dir".
  // console.dir(e.target);
  //* Aratılan kelimeye eriştik.
  const value = e.target[0].value;

  //* Aratılan kelime boşsa function durdur.
  if (value.trim() == "") return alert(`Please , don't null of the form`);

  //* Ekrana loader gönder.
  ui.renderLoader();
  //* Ekrandaki title güncelle.
  ui.uptadeTitle(`Results for " ${value} "`);
  //* API'dan verileri aldık.
  api
    .searchMusic(value)
    .then((data) => ui.renderCards(data))
    .catch((error) => {
      console.log(error);
      alert(`Sorry, couldn't see this website.`);
    });
});
//* Liste alanındaki tıklanma olaylarını izleyeceğiz ve eğer tıklanırsa şarkıyı oynayacağız.
ui.list.addEventListener("click", (e) => {
  //* Eğer oynat butonuna tıklanırsa o şarkıyı oynatacağız.
  // console.log("Tıklandı...", e.target.className);
  if (e.target.className == "play") {
    //* Oynatılacak şarkının cardına eriş.
    // console.log("oynat...",e.target.parentElement.parentElement);
    //* En yakın card elementine eriştik closest() ile dinamik yaptık.
    const card = e.target.closest(".card");
    //* Oynatılacak şarkının bilgilerini al.
    const data = card.dataset;
    //* Player alanını renderla.
    ui.renderPlayer(data);
  }
});
