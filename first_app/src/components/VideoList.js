import { useCallback } from "react";
import useVideos from "../hooks/Videos";
import PlayButton from "./PlayButton";
import Video from "./Video";

function VideoList({ deleteVideo, updateVideo, }) {
    const data = useVideos();
    const play = useCallback(() => { console.log("Play") }, []);
    const pause = useCallback(() => { console.log("Pause") }, []);
    return (
        <>

            {
                data.map((video) => {
                    return (
                        <Video key={video.id} updateVideo={updateVideo} deleteVideo={deleteVideo} id={video.id} verified={video.verified} title={video.title} channel={video.channel} time={video.time} views={video.views}>
                            {
                                <PlayButton onPause={pause} onPlay={play} message='Play'>
                                    Toggle Play Pause
                                </PlayButton>
                            }
                        </Video>
                    )
                })
            }
        </>
    );
}

export default VideoList;
