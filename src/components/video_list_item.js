import React from 'react';

const VideoListItem = ({videos, onVideoSelect}) => {
    //const videos = props.videos;
    //const onVideoSelect = props.onVideoSelect;
    //console.log(videos,onVideoSelect)
    const imageURL = videos.snippet.thumbnails.default.url;

    return(
        <li onClick={()=>onVideoSelect(videos)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imageURL}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {videos.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;