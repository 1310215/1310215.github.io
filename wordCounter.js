function countWords() {
    // テキストエリアの内容を取得
    var inputText = document.getElementById("inputText").value;

    // ワードカウントを実行
    var wordCount = countWordsFromString(inputText);

    // 結果を表示
    document.getElementById("wordCountResult").innerText = "Word count: " + wordCount;
}

function countWordsFromString(text) {
    // スペースや改行を区切り文字として、単語を分割
    var words = text.split(/\s+/);

    // 空白を除いた単語の数を返す
    return words.filter(function(word) {
        return word !== "";
    }).length;
}
