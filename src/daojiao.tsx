import React from "react";
import "./styles/btn.css";
import yinyang from "./assets/yinyang.jpg";
import "./styles/pinyin.css";
import {Pinyin} from "./pinyin";


class DaojiaoDialog extends React.Component<any, any> {
    render() {
        return (
            <div id={"daojiao-desc"} className={"modal modal-xl"} tabIndex={-1} aria-hidden={true}>
                <div className={"modal-dialog"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h3>道教</h3>
                            <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"}
                                    aria-label={"Close"}></button>
                        </div>
                        <div className={"modal-body"}>
                            <section>
                                <h4>簡介</h4>
                                <p>是一個多神教，也是華夏的本土宗教，其思想最早源於黃帝（黃帝學派託言），崇拜道家老子為道祖，最早可以上溯到原始社會時期中國人的
                                    祭天、祭祖等祭祀及巫術崇拜活動，後融合道家、陰陽家的「五行」、「陰陽」等思想合併形成黃帝學派，在漢代中後期形成黃老道，經南北朝時
                                    期的宗教改革，及元、明時期的宗派融合，逐漸演變成現在的道教。
                                </p>
                                <p>道教和道家學說指兩樣不同事物，但是經常被混為一談。道教是在道家思想的基礎上發展而成的，具體解釋見<a
                                    href={"https://kknews.cc/zh-hk/culture/ev5a3r.html"} target={"_blank"}
                                    className={"fa fa-external-link"}>這篇文章</a>。</p>
                                <blockquote cite={"https://kknews.cc/zh-hk/culture/ev5a3r.html"}>
                                    然而，如果將道家理解為由老子、莊子開創，並在魏晉被重新發明的哲學思想流派，將道教理解為於兩漢逐漸形成，後又有若干發展分化的宗教，那麼
                                    ，雖然道教在理論上汲取了道家思想的大量因素，甚至奉老子為教主，但是二者還是不能混為一談，也不能說道教理論就是道家思想。
                                </blockquote>
                            </section>

                            <section>
                                <h4>主要神明</h4>
                                道教是一個<b>多神教</b>，道教的最高神是由道衍化的三清
                                （「一<Pinyin pinyin={"qi4"} text={"炁"}/>化三清」）尊神，即元始天尊、靈寶天尊和道
                                德天尊，其中道德天尊即是太上老君（老子）。<br/>
                                道教先人認為天庭有玉皇大帝統治萬神，地獄和海中世界各有其主的概念，地府與海洋作為天庭的附屬，而天、地、海三個區域的主神即三官大帝
                                。道教也發展出了閻羅地府和龍王水晶宮的一系列神仙官員，再加上地方神仙系列如功曹使者、山神、城隍、土地神、灶君等，並吸收了古代中國
                                古代神話中的西王母、九天玄女等，信奉的神仙譜系極為繁雜。
                            </section>

                            <section>
                                <h4>宮觀</h4>
                                <p><b>宮觀</b>是道教徒活動的宗教場所。道教有全真宮觀與正一道宮觀之分，全真派的道士出家，在宮觀內過叢林生活，不食葷，重內丹修煉，不尚
                                    符籙，主張「性命雙修」，以修真養性為正道；正一派道士一般有家室，不忌葷，以行符<Pinyin
                                        pinyin={"lu4"} text={"籙"}/>為主要特徵（畫符念咒、驅鬼降妖、祈福禳災）。目前，中國
                                    的道教宮觀共9000余座，被列為道教全國重點宮觀有21處，乾道、坤道5萬餘人。
                                </p>
                            </section>

                            <section>
                                <h4>信徒分佈</h4>
                                <p>道教信仰目前在台灣、香港、澳門地區仍很普遍，那裏信徒眾多、宮觀林立，同時在亞洲、美洲、歐洲、非洲、大洋洲也都有當地華僑建立的道教宮觀。</p>
                                <p>在香港，黃大仙祠於1937年建造，距今已有<span id="count-wtst">...</span>年的歷史。</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    updateYear() {
        const year = new Date().getFullYear();
        const element = document.getElementById("count-wtst");
        if (element) {
            element.innerText = (year - 1937).toString();
        }
    }

    componentDidMount() {
        this.updateYear();
    }
}

export class Daojiao extends React.Component<any, any> {
    protected showDialog(): void {
        const dialog = document.getElementById("dialog-daojiao");
        if (dialog) {
            (dialog as HTMLDialogElement).showModal();
        }
    }

    render(): JSX.Element {
        return (
            <>
                <button className={"btn"} data-bs-toggle={"modal"} data-bs-target={"#daojiao-desc"}>
                    <img src={yinyang} alt={"陰陽 —— 道教的象徵"}/>
                    <p>道教</p>
                </button>
                <DaojiaoDialog/>
            </>
        );
    }
}
