import React from "react";
import video from "./assets/video.png"

class VideoDialog extends React.Component<any, any> {
  render(): React.ReactNode {
    return <div id={"video-desc"} className={"modal modal-xl"} tabIndex={-1} aria-hidden={true}>
    <div className={"modal-dialog"}>
        <div className={"modal-content"}>
            <div className={"modal-header"}>
                <h3>推薦影片</h3>
                <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"}
                        aria-label={"Close"}></button>
            </div>
                <div className={"modal-body"}>
                    以下列出一些有關老子的影片資源，供大家參考：
                    <section>
                        <h4>《道德經》詳解</h4>
                        <a href={"https://www.youtube.com/watch?v=Qn7DrXcqOGI"} target={"_blank"}>《道德經》詳解（第一章）</a>
                        <a href={"https://www.youtube.com/watch?v=gVNu286nUDM"} target={"_blank"}>《道德經》的奧秘（曾仕強主講）</a>
                    </section>

                    <section>
                        <h4>老子動畫</h4>
                        <a href={"https://www.youtube.com/watch?v=q7zKTbN_XQw"} target={"_blank"}>老子動畫：道德經</a>
                    </section>
                </div>
            </div>
        </div>
    </div>;
  }
}


export class Video extends React.Component<any, any> {
    render(): React.ReactNode {
        return <>
            <button type={"button"} className={"btn"} data-bs-toggle={"modal"} data-bs-target={"#video-desc"}>
                <img src={video} alt={"video"} />
                <p>推薦影片</p>
            </button>
            <VideoDialog />
        </>
    }
}