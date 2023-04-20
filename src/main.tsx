import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {TTC} from "./ttc";
import {Daojiao} from "./daojiao";
import { Pinyin } from "./pinyin";
import {Video} from "./video";

const storedTheme = localStorage.getItem("theme");

function getPreferredTheme(): "dark" | "light" | string {
    if (storedTheme) {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme: string): void {
    if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }
}

setInterval(function () {
    setTheme(getPreferredTheme());
}, 10);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <h1>老子</h1>
        <h2>道家思想創始人</h2>
        <section>
            <h3>簡介</h3>
            <p><b>老子（前571-前471）</b>，安徽亳州人，李氏，一說姓老，一說姓利，名耳或貞，字
                <Pinyin pinyin={"dan1"} text={"聃"}/>，世人尊稱為<b>「老子」</b>。
            </p>
            <p>他是道家思想的創始人、道家的主要代表人物，主要著作有《道德經》（也稱《老子》，是道家思想和道教的經典。</p>
        </section>

        <section>
            <h3>點擊以下按鈕查看更多：</h3>
            <div className={"btns"}>
                <TTC/>
                <Daojiao/>
                <Video/>
            </div>
        </section>

        <footer>
            <section>
                <h4>關於本網站</h4>
                <p>本網站使用<a href={"https://reactjs.org/"} target={"_blank"}>React</a>、<a href={"https://getbootstrap.com/"} target={"_blank"}>Bootstrap</a>、<a href={"https://www.typescriptlang.org/"} target={"_blank"}>TypeScript</a>製成。</p>
                <p>本網站的原始碼在<a href={"https://github.com/ZCG-coder/chis-website"} target={"_blank"}>GitHub</a>上。</p>
            </section>
        </footer>
    </React.StrictMode>,
);
