const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (err) => reject(err));
    img.src = url;
  });

const loadAudio = (url) =>
  new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.addEventListener("load", () => resolve(audio));
    audio.addEventListener("error", (err) => reject(err));
    audio.src = url;
  });
