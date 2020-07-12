function speech (lang, text) {
  const uttr = new SpeechSynthesisUtterance();

  uttr.text = text;

  switch (lang) {
    case "ja":
      uttr.lang = "ja_JP";
      uttr.name = "日本語 日本"
      break;
    case "en":
      uttr.lang = "en_US";
      uttr.name = "英語 アメリカ合衆国"
      break;
    case "ch1":
      uttr.lang = "zh_CN_#Hans";
      uttr.name = "中国語 中国"
      break;
    case "ch2":
      uttr.lang = "zh_CN_#Hans";
      uttr.name = "中国語 中国"
      break;
    case "ko":
      uttr.lang = "ko_KR";
      uttr.name = "韓国語 韓国"
      break;
    case "pt":
      uttr.lang = "pt_PT";
      uttr.name = "ポルトガル語 ポルトガル"
      break;
  }

  speechSynthesis.speak(uttr);
}