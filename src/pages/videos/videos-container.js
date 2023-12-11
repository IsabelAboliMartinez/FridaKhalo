import "./videos-container.scss";
import { videoList } from "./videos-list.js";

function createVideos() {
  const videoContainer = document.getElementById("videos-article");

  videoList.forEach((video) => {
    const divVideo = document.createElement("div");
    divVideo.classList.add("video");

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", video.url);
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "100%");
    iframe.setAttribute("allowfullscreen", "");

    divVideo.appendChild(iframe);
    videoContainer.appendChild(divVideo);
  });
}

document.addEventListener("DOMContentLoaded", createVideos);
