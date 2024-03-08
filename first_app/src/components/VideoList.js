import PlayButton from "./PlayButton";
import Video from "./Video";

function VideoList({ data, deleteVideo, updateVideo }) {
    return (
        <>

            {
                data.map((video) => {
                    return (
                        <Video key={video.id} updateVideo={updateVideo} deleteVideo={deleteVideo} id={video.id} verified={video.verified} title={video.title} channel={video.channel} time={video.time} views={video.views}>
                            {
                                <PlayButton onPause={() => { console.log("Pause", video.title) }} onPlay={() => { console.log("Play", video.title) }} message='Play'>
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