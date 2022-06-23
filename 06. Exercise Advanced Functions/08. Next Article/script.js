function getArticleGenerator(articles) {

    return function () {
        let toUse = articles.shift()
        if (toUse) {
            let place = document.getElementById('content');
            let article = document.createElement('article');
            article.textContent = toUse;
            place.appendChild(article)
        }
    }
}
