function loadPosts() {
    // fetch("https://raw.githubusercontent.com/paminus-kingori/writer-portfolio/main/portfolioSrc.json")
    fetch("assets/js/portfolioSrc.json")

        .then((res) => res.json())
        .then((data) => {
            tab('Article');
        });
}

function displayPosts(posts) {
    console.log(posts);
    // const slicePosts = posts.slice(0, 6);
    const slicePosts = posts;
    const portfolio = document.getElementById("portfolio");
    for (const post of slicePosts) {
        // console.log("Hello "+ post.portfolio_category)
        if(post.portfolio_category  === "Article" || post.portfolio_category === "Story"){
        const div = document.createElement("div");
        div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href=""><img  src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="">${post.portfolio_title}</a></h2>
            
            <a class="portfolio-card__btn " href="">Learn More  <i class="fa-solid fa-arrow-right"></i></a>
        `;
        portfolio.appendChild(div);
        }
        else{}
}
}
loadPosts();

// const loadMore = document.getElementById("load-more-btn");

function loadDuePosts(e) {
    e.preventDefault();
    fetch("assets/js/portfolioSrc.json")
        .then((res) => res.json())
        .then((data) => {
            displayDuePosts(data);
            loadMore.style.display = "none";
        });
}

function displayDuePosts(posts) {
    const slicePosts = posts;
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
    fetch("assets/js/portfolioSrc.json")
        .then((res) => res.json())
        .then((data) => {
            const filterData = data.filter((d) => d.portfolio_category === category);
            displayTabPosts(filterData);
        });
}

function displayTabPosts(posts) {

    // document.getElementById("portfolio").style.display = "none";
    const portfolioTabArticle = document.getElementById("portfolioTabArticle");
    const portfolioTabStory = document.getElementById("portfolioTabStory");

    for (const post of posts) {

        if (post.portfolio_category === "Article") {
            document.getElementById("portfolioTabArticle").style.display =
                "grid";
             document.getElementById("portfolioTabStory").style.display =
                 "none";

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
            <p class="blog-card__short-desc" style=" margin-bottom: 20px; "> ${post.portfolio_description}</p>
            <a class="portfolio-card__btn " target="_blank" href="${post.link}">Learn More  <i class="fa-solid fa-arrow-right"></i></a>
        `;

            portfolioTabArticle.appendChild(div);
            const moreBtn = document.createElement('a');
            moreBtn.innerHTML = '<a class="load-more-btn">Load More</a>';
        }
        if (post.portfolio_category === "Story") {
            document.getElementById("portfolioTabStory").style.display =
                "grid";
             document.getElementById("portfolioTabArticle").style.display =
                 "none";

            const div = document.createElement("div");
            div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href=""><img loading="lazy" src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="">${post.portfolio_title}</a></h2>
            <p class="blog-card__short-desc" style=" margin-bottom: 20px; "> ${post.portfolio_description}</p>
            <a class="portfolio-card__btn " target="_blank" href="${post.link}">Learn More  <i class="fa-solid fa-arrow-right"></i></a>
        `;

            portfolioTabStory.appendChild(div);
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
