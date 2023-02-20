import Image from "next/image";
import { useRef } from "react";
import styled from "styled-components";
import thumbnail from "../assets/images/thumbnail.png";

// thumbnailQuality: "default" | "hqdefault" | "mqdefault" | "sddefault";

export default function YouTubeFrame({
  video,
  width = "100",
  height = "400",
  thumbnailQuality = "sddefault",
}) {
  const divRef = useRef(null);

  const onClick = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`
    );
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <YoutubeFrame ref={divRef} className="position-relative">
      <span
        onClick={onClick}
        className="ti-control-play position-absolute display-1 text-white"
      />
      <Image
        onClick={onClick}
        src={`https://img.youtube.com/vi/${video}/${thumbnailQuality}.jpg`}
        alt="YouTube Video Thumbnail"
        width={width}
        height={height}
        className="shadow"
      />
      {/* <Image
        onClick={onClick}
        loading="lazy"
        src={thumbnail}
        alt="YouTube Video Thumbnail"
        className="shadow"
      /> */}
    </YoutubeFrame>
  );
}

const YoutubeFrame = styled.div`
  width: 100%;
  min-height: 200px;
  /* height: auto; */

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
