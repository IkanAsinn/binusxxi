const categoryTitle = document.querySelectorAll('.dropdown-item');
const allCategoryPosts = document.querySelectorAll('.all');


for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    // changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }

    const url = new URL(window.location);
    if (item.attributes.id.value === 'all') {
        url.searchParams.delete('category');
        window.history.pushState({}, '', url);
    } else {
        url.searchParams.set('category', item.attributes.id.value);
        console.log(2);
        window.history.pushState({}, '', url);
    }
}

// function changeActivePosition(activeItem){
//     for(let i = 0; i < categoryTitle.length; i++){
//         categoryTitle[i].classList.remove('active');
//     }
//     activeItem.classList.add('active');
// };

const filterBtn = document.querySelector('#filter-btn');
filterBtn.addEventListener('click', () => {
    alert('Implemented Soon...');
});

$(document).ready(() => {
    checkUrl();
});

function checkUrl() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    for(let i = 0; i < categoryTitle.length; i++){
        if(categoryTitle[i].attributes.id.value === category) {
            filterPosts(categoryTitle[i]);
        }
    }
}