function countWords() {
    // テキストエリアの内容を取得
    let inputText = document.getElementById("countText").value;

    // ワードカウントを実行
    let wordCount = countWordsFromString(inputText);

    // 結果を表示
    document.getElementById("wordCountResult").innerText = "Word count: " + wordCount;
}

function countWordsFromString(text) {
    // スペースや改行を区切り文字として、単語を分割
    let words = text.split(/\s+/);

    // 空白を除いた単語の数を返す
    return words.filter(function(word) {
        return word !== "";
    }).length;
}

function countTheFromString(text) {
    let words = text.split(/\s+/);

    return words.filter(function(word) {
        return word === "The" || word === "the";
    }).length;
}

function countThe() {
    let inputText = document.getElementById("countText").value;

    let theCount = countTheFromString(inputText);

    document.getElementById("theCountResult").innerText = "The number of the " + theCount;
}
