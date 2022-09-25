function loadPosts() {
    fetch("https://raw.githubusercontent.com/paminus-kingori/writer-portfolio/main/portfolioSrc.json")
        .then((res) => res.json())
        .then((data) => {
            displayPosts(data);
        });
}

function displayPosts(posts) {
    console.log(posts);
    const slicePosts = posts.slice(0, 6);
    const portfolio = document.getElementById("portfolio");
    for (const post of slicePosts) {
        const div = document.createElement("div");
        div.classList.add("portfolio-card");
        div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href=""><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="">View Project  <i class="fa-solid fa-arrow-right"></i></a>
        `;
        portfolio.appendChild(div);
    }
}
loadPosts();

// const loadMore = document.getElementById("load-more-btn");

function loadDuePosts(e) {
    e.preventDefault();
    fetch("https://raw.githubusercontent.com/paminus-kingori/writer-portfolio/main/portfolioSrc.json")
        .then((res) => res.json())
        .then((data) => {
            displayDuePosts(data);
            loadMore.style.display = "none";
        });
}

function displayDuePosts(posts) {
    const slicePosts = posts.slice(0, 6);
    const portfolio = document.getElementById("portfolio");
    for (const post of slicePosts) {
        const div = document.createElement("div");
        div.classList.add("portfolio-card");
        div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">Learn More  <i class="fa-solid fa-arrow-right"></i></a>
        `;
        portfolio.appendChild(div);
    }
}

// loadMore.addEventListener("click", loadDuePosts);


// tab script

function tab(category) {
    fetch("https://raw.githubusercontent.com/paminus-kingori/writer-portfolio/main/portfolioSrc.json")
        .then((res) => res.json())
        .then((data) => {
            const filterData = data.filter((d) => d.portfolio_category === category);
            displayTabPosts(filterData);
        });
}

function displayTabPosts(posts) {
    document.getElementById("portfolio").style.display = "none";
    const portfolioTabGraphic = document.getElementById("portfolioTabGraphic");
    const portfolioTabArticle = document.getElementById("portfolioTabArticle");
    const portfolioTabStory = document.getElementById("portfolioTabStory");
    const portfolioTabBook = document.getElementById("portfolioTabBook");
    for (const post of posts) {
        if (post.portfolio_category === 'Graphic') {
            document.getElementById("portfolioTabGraphic").style.display = "grid";
            document.getElementById("portfolioTabArticle").style.display = "none";
            document.getElementById("portfolioTabStory").style.display = 'none';
            document.getElementById("portfolioTabBook").style.display = "none";
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">View Project  <i class="fa-solid fa-arrow-right"></i></a>
        `;

            portfolioTabGraphic.appendChild(div);
        }
        if (post.portfolio_category === "Article") {
            document.getElementById("portfolioTabArticle").style.display =
                "grid";
             document.getElementById("portfolioTabStory").style.display =
                 "none";
             document.getElementById("portfolioTabBook").style.display =
                 "none";
             document.getElementById("portfolioTabGraphic").style.display =
                 "none";
            const div = document.createElement("div");
            div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">Learn More  <i class="fa-solid fa-arrow-right"></i></a>
        `;

            portfolioTabArticle.appendChild(div);
        }
        if (post.portfolio_category === "Story") {
            document.getElementById("portfolioTabStory").style.display =
                "grid";
             document.getElementById("portfolioTabGraphic").style.display =
                 "none";
             document.getElementById("portfolioTabBook").style.display =
                 "none";
             document.getElementById("portfolioTabArticle").style.display =
                 "none";
            const div = document.createElement("div");
            div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">Learn More  <i class="fa-solid fa-arrow-right"></i></a>
        `;

            portfolioTabStory.appendChild(div);
        }
        if (post.portfolio_category === "Book") {
            document.getElementById("portfolioTabBook").style.display =
                "grid";
             document.getElementById("portfolioTabStory").style.display =
                 "none";
             document.getElementById("portfolioTabGraphic").style.display =
                 "none";
             document.getElementById("portfolioTabArticle").style.display =
                 "none";
            const div = document.createElement("div");
            div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">Learn More  <i class="fa-solid fa-arrow-right"></i></a>
        `;
            portfolioTabBook.appendChild(div);
        }
        
    }

}


// Add active class to the current button (highlight it)
var portTab = document.getElementById("portfolio-tab");
var items = portTab.getElementsByClassName("tab-item");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += " active";
  });
}
