$(window).on("load", () => {
  $(".hero-img").addClass("hero-img-playing");
  $(".hero-name").addClass("hero-name-playing");
  $("#hero-link-1").addClass("hero-link-playing");
  $("#hero-link-2").addClass("hero-link-playing");
  $("#hero-link-3").addClass("hero-link-playing");
});

// PIXI---------------------------------------------------
let app = new PIXI.Application({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  width: 600,
  height: 800,
});
const heroImg = document.querySelector(".hero-img");
heroImg.appendChild(app.view);

let img = new PIXI.Sprite.from("images/cess.png");
// img.width = window.innerWidth;
// img.height = window.innerHeight;
img.width = 600;
img.height = 800;
app.stage.addChild(img);

depthMap = new PIXI.Sprite.from("images/cess-map.png");
app.stage.addChild(depthMap);

displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = (e) => {
  displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 80;
  displacementFilter.scale.y = (window.innerWidth / 2 - e.clientY) / 80;
};

// $(document).ready(function () {
//   let sound = document.getElementById("audioId");
//   sound.currentTime = 0;
//   sound.loop = false; //if you want it to restart playing automatically when it ends
//   sound.play();
// });

$(window).on("load", () => {
  $("#yes-audio").trigger("play");
});
