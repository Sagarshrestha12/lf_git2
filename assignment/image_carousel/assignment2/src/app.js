class ImageCarousel {
  constructor(width, height, transitionTime, holdingTime) {
    var mainContainer = document.querySelector("div.container");
    var wrapper = document.querySelector("div.image-wrapper");
    this.images = document.getElementsByTagName("img");
    this.width = width;
    this.height = height;
    this.currentImage = 0;
    this.direction = {
      left: -1,
      right: 1,
    };
    this.arrow = {
      left: 1,
      right: -1,
    };
    this.arrowbuttonClick = false;
    mainContainer.style.width = this.width;
    mainContainer.style.height = this.height;
    mainContainer.style.margin = " 0 auto";
    mainContainer.style.border = "1px solid black";
    mainContainer.style.overflow = "hidden";
    mainContainer.style.position = "relative";

    wrapper.style.width = parseInt(this.width) * this.images.length + "px";
    wrapper.style.height = this.height;
    wrapper.style.position = "absolute";

    for (let i = 0; i < this.images.length; i++) {
      this.images[i].style.display = "inline-block";
      this.images[i].style.position = "absolute";
      this.images[i].style.left = i * parseInt(this.width) + "px";
      this.images[i].top = "0px";
    }
    this.leftArrow = document.createElement("button");
    this.leftArrow.innerHTML = "&larr;";
    this.drawarrow(this.leftArrow, this.arrow.left);
    // this.leftArrow.addEventListener("click", this.showArrowHandler.bind(this));
    mainContainer.appendChild(this.leftArrow);
    this.rightArrow = document.createElement("button");
    this.rightArrow.innerHTML = "&rarr;";
    this.drawarrow(this.rightArrow, this.arrow.right);
    mainContainer.appendChild(this.rightArrow);
    // this.drawDot().bind(this);
    for (let i = 0; i < this.images.length; i++) {
      const dot = document.createElement("button");
      dot.innerHTML = "&squ;";
      dot.style.fontSize = "3px";
      dot.style.padding = "5px";
      dot.style.borderRadius = "50%";
      dot.style.left = 250 + i * 30 + "px";
      dot.style.bottom = "5px";
      dot.style.position = "absolute";
      dot.style.backgroundColor = "#bbb";
      // dot.addEventListener("click", handleDot.bind(this));
      mainContainer.appendChild(dot);
    }
  }
  drawarrow(showArrow, type) {
    showArrow.style.fontSize = "30px";
    showArrow.style.position = "absolute";
    showArrow.style.background = "none";
    if (type === 1) {
      showArrow.style.left = "0px";
    } else {
      showArrow.style.right = "0px";
    }
    showArrow.style.top = "40%";
    showArrow.style.border = "0px transparent";
    showArrow.style.color = "white";
  }
  handleDot() {
    this.currentImage = i;
    this.showImage(currentImage).bind(this);
  }

  showImage(current) {
    for (let j = 0; j < this.images.length; j++) {
      if (current > j) {
        this.images[j].style.left = `-${
          Math.abs(current - j) * parseInt(this.width)
        }px`;
      } else {
        this.images[j].style.left = `${
          Math.abs(current - j) * parseInt(this.width)
        }px`;
      }
    }
  }
}
const obj = new ImageCarousel("600px", "400px");
