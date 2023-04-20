import React from "react";
import tao_te_ching from "./assets/tao_te_ching.jpg";
import "./styles/btn.css";
import { Pinyin } from "./pinyin";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class TTCDialog extends React.Component<any, any> {
    render() {
        return (<div id={"tao-te-ching-desc"} className={"modal modal-xl"} tabIndex={-1} aria-hidden={true}>
                <div className={"modal-dialog"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h3>《道德經》</h3>
                            <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"}
                                    aria-label={"Close"}></button>
                        </div>
                        <div className={"modal-body"}>
                            <section>
                                <h4>簡介</h4>
                                <p>乃道教奉行的典籍，相傳為春秋末期思想家老子所著。在流傳期間產生多個版本，包括流行最廣的<a
                                href="https://ctext.org/dao-de-jing/zh" target="_blank">
                                王<Pinyin pinyin={"wen1"} text={"弼"} />本</a>。
                                </p>
                                <p>以「道」與「德」為綱，論述修身、治國、用兵、養生之理，而多以政治為旨歸，對傳統思想、科學、政治、文學、藝術等領域產生了深刻影響。</p>
                            </section>
                            <section>
                                <h4>主要觀點</h4>
                                <ol>
                                    <li>守柔 ——
                                        柔能克剛，並非所在所有事情上顯得堅強才能克服困難；太過堅強反而容易被看出破綻，就像刀磨得太尖銳，就容易折斷一樣
                                    </li>
                                    <li>居後不爭 ——
                                        人應有「居後不爭」之心，只有寬容、儉樸、謙讓不爭，方能具備道德勇氣，進而博施於人，受人尊敬擁護而成大器
                                    </li>
                                    <li>寡慾 ——
                                        老子謂人應「寡慾」，去除不必要的需求，才能專注在精神的需求上，所謂「聖人去甚、去奢、去泰。」<br/>
                                        也就是說，聖人能夠去除極端的、奢侈的、過度的需求，只保留最基本的需求，避免讓奢望衝昏頭腦。
                                    </li>
                                    <li>無為 —— 「不尚賢，使民不爭；不貴難得之貨，使民不為盜；不見可欲，使民心不亂。」<br/>
                                        意即：「不崇尚賢才，使民不爭；不使難得的貨品顯得，使人民不偷盜；不顯露足以引起貪慾的物事，使人民的心思不至於被擾亂。」<br/>
                                        無論是治理國家，還是對待他人，都要隨著自然規律行事，所謂「為無為，則無不治。」。
                                    </li>
                                </ol>
                            </section>
                            <section>
                                <h4>閱讀本書</h4>
                                <ul>
                                    <li><a href="https://ctext.org/dao-de-jing/zh" target="_blank"
                                           className="fa fa-external-link">王弼本—中國哲學電子書計劃</a></li>
                                    <li><a href="https://zh.wikisource.org/wiki/道德經_(王弼本)" target="_blank"
                                           className="fa fa-external-link">王弼本—維基文庫</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class TTC extends React.Component<any, any> {

    render() {
        return <>
            <button className={"btn"} data-bs-toggle={"modal"} data-bs-target={"#tao-te-ching-desc"}>
                <img src={tao_te_ching} alt={"《道德經》"}/>
                <p>《道德經》</p>
            </button>
            <TTCDialog/>
        </>;
    }
}
