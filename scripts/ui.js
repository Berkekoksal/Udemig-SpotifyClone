export default class UI {
  //* HTMl'den çağırdığımız arayüz elementleri
  constructor() {
    this.list = document.querySelector(".list");
    this.form = document.querySelector(".form");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  }
  renderCards(songs) {
    //* Loader'ı temizliyoruz.
    this.list.innerHTML = "";
    //* API'dan gelen her bir nesne için ekrana card basıyoruz.
    songs.forEach((song) => {
      // console.log(song);
      const div = document.createElement("div");
      div.className = "card";
      //* Card elemanına müzik bilgilerini dataset olarak eklemem gerekiyor.
      // console.log(song);
      div.dataset.title = song.title;
      div.dataset.subtitle = song.subtitle;
      div.dataset.img = song.images.coverarthq;
      div.dataset.mp3 = song.hub.actions[1].uri;
      div.innerHTML = `
         <figure>
              <img src="${song.images.coverarthq}"
                alt=""
              />
              <div class="play">
                <i class="bi bi-play-fill"></i>
              </div>
            </figure>
            <div class="music-info">
              <h4>${song.subtitle}</h4>
              <h5>${song.title}</h5>
              </div>
      `;
      this.list.appendChild(div);
    });
  }
  //* Ekrana loader bastık.
  renderLoader() {
    this.list.innerHTML = `
                <!--* Loader -->
          <div class="loader">
            <div class="audio-player">
              <div class="album-cover"></div>
              <div class="player-controls">
                <div class="song-info">
                  <div class="song-title">Song Title</div>
                  <p class="artist">Artist</p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
                <div class="buttons">
                  <button class="play-btn">
                    <svg
                      viewBox="0 0 16 16"
                      class="bi bi-play-fill"
                      fill="currentColor"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      style="color: white"
                    >
                      <path
                        fill="white"
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                      ></path>
                    </svg>
                  </button>
                  <button class="pause-btn">
                    <svg
                      viewBox="0 0 16 16"
                      class="bi bi-pause-fill"
                      fill="currentColor"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      style="color: white"
                    >
                      <path
                        fill="white"
                        d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
    `;
  }
  //* Title güncelleme.
  uptadeTitle(text) {
    this.title.textContent = text;
  }
  //* Player alanını renderla
  renderPlayer(song) {
    this.player.innerHTML = `
           <div class="info">
        <img class="animate" src="${song.img}" alt="song-image" />

        <div class="player-title">
          <h4>${song.title}</h4>
          <h5>${song.subtitle}</h5>
        </div>
      </div>
      <audio controls autoplay>
        <source
          src="${song.mp3}"
        />
      </audio>
      <!--*  Player Icons -->
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>
    `;
    //* Audio elementinin al ve oynat.
    // this.player.querySelector("audio").play;
    // console.log(song)
    //* Şarkının başlama ve durma olaylarını izleyelim.
    const audio = this.player.querySelector("audio").play;
    audio.addEventListener("play", () => {
      // console.log("play");
      this.toggleAnimation;
    });
    audio.addEventListener("pause", () => {
      // console.log("stop");
      this.toggleAnimation;
    });
  }
  //* Animasyon yoksa eklesin varsa çıkarsın (togle).
  toggleAnimation() {
    const img = document.querySelector(".info img");
    img.classList.toggle("animate");
  }
}
