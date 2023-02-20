import Image from "next/image";
import { useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";
import styled from "styled-components";
import thumbnail from "../assets/images/thumbnail.png";

// thumbnailQuality: "default" | "hqdefault" | "mqdefault" | "sddefault";

export default function YouTubeFrame({
  video,
  width = "400",
  height = "400",
  thumbnailQuality = "hqdefault",
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
    <YoutubeFrame ref={divRef}>
      <Play onClick={onClick}>
        <FaPlayCircle size={54} />
      </Play>
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
  position: relative;

  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    /* aspect-ratio: 16 / 9; */
    object-fit: cover;
  }
`;

const Play = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%);
  color: #44e986;
  border: 2px solid #44e986;
  border-radius: 50%;
  padding: 5px;
`;
