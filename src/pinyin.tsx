import React from "react";
import "./styles/pinyin.css";


type PinyinProps = {
    pinyin: string,
    text: string
}

const tones = {
    "a": ["ā", "á", "ǎ", "à"],
    "e": ["ē", "é", "ě", "è"],
    "i": ["ī", "í", "ǐ", "ì"],
    "o": ["ō", "ó", "ǒ", "ò"],
    "u": ["ū", "ú", "ǔ", "ù"],
    "ü": ["ǖ", "ǘ", "ǚ", "ǜ"],
}

function convertPinyin(text: string) {
    const tone = text.at(text.length - 1);
    const toneNum = parseInt(tone!);
    if (!toneNum) {
        return text;
    }
    text = text.substring(0, text.length - 1);
    for (const char of text) {
        switch (char) {
            case "a":
                return text.replace("a", tones.a[toneNum - 1]);
            case "e":
                return text.replace("e", tones.e[toneNum - 1]);
            case "i":
                return text.replace("i", tones.i[toneNum - 1]);
            case "o":
                return text.replace("o", tones.o[toneNum - 1]);
            case "u":
                return text.replace("u", tones.u[toneNum - 1]);
            case "ü":
                return text.replace("ü", tones.ü[toneNum - 1]);
        }
    }
}

export class Pinyin extends React.Component<PinyinProps, any> {
    render() {
        return (
            <>
                <div className={"pinyin-container"}><sup className={"pinyin no-select"}>{convertPinyin(this.props.pinyin)}</sup>{this.props.text}
                </div>
                <span className={"no-select"}>&emsp;</span>
            </>
        );
    }
}
