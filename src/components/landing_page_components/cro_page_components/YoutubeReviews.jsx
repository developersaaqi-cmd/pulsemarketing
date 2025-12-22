"use client";

export default function YoutubeReviews() {
  return (
    <section id="yt-video">
      <div className="heading-wrapper" id="center">
          <h3>Clients Reviews</h3>
      </div>
      <div className="video-wrapper">
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/I7jZtX0cp1k?autoplay=1&mute=1&controls=1&loop=1&playlist=I7jZtX0cp1k"
            title="YouTube Shorts - 1"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/dHn_Rri3Q0E?autoplay=1&mute=1&controls=1&loop=1&playlist=dHn_Rri3Q0E"
            title="YouTube Shorts - 2"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/NwGGvd1tJxs?autoplay=1&mute=1&controls=1&loop=1&playlist=NwGGvd1tJxs"
            title="YouTube Shorts - 3"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="item">
          <iframe
            src="https://www.youtube.com/embed/wfyCODcnmjo?autoplay=1&mute=1&controls=1&loop=1&playlist=wfyCODcnmjo"
            title="YouTube Shorts - 4"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
