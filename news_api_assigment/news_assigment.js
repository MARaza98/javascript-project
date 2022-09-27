///////////////////////////
////News data urls

const BASE_KEY = "91dbee9da8fa4757a7b9dd050ac1c428";
const BASE_URL = "https://newsapi.org/v2/top-headlines";
newsDataAsync()
async function newsDataAsync() {
    try {
      const newsAssigmentURL = `${BASE_URL}?language=en&apiKey=${BASE_KEY}&units=metric`;
      const req = await fetch(newsAssigmentURL);
      const res = await req.json()
      displayNews(res)
    } catch (e) {
      console.error(e)
      alert("Data is not coming")
    }
  }

  function displayNews(newsaddress){
    var news = document.getElementById('main')
        for(i = 0; i < 8 ;i++){
        news.innerHTML+=`
          <div class="col-md-8">
          <div class="card mb-4">
  <img src="${newsaddress.articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title">${newsaddress.articles[i].title.slice(0,35)}...</h5>
    <p class="card-text">${newsaddress.articles[i].description}..</p>
    <a href="${newsaddress.articles[i++].url}" class="btn btn-primary" target="_blank" >Read more</a>
  </div>
</div>
</div>
<div class="col-md-4">
<div class="card">
<img src="${newsaddress.articles[i].urlToImage}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${newsaddress.articles[i].title.slice(0,35)}...</h5>
<p class="card-text">${newsaddress.articles[i].description}..</p>
<a href="${newsaddress.articles[i].url}" target="_blank" class="btn btn-primary" >Read more</a>
</div>
</div></div>
        `
    }
}