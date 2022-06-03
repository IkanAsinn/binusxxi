const closePopUp = document.querySelector('.close-btn');
const overlay = document.querySelector('#overlay');
const openButton = document.querySelectorAll('.open');
const header = document.querySelector('.header h1');
const mid = document.querySelector('.header .mid');
const rating = document.querySelector('.header .rating');
const information = document.querySelector('.container-1');
const genreButton = document.querySelector('.genre-btn');
const synopsis = document.querySelector('.synopsis');

import {anime as anime} from './anime.js';
import {movies as movies} from './movies2.js'

openButton.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.querySelector(btn.dataset.modalTarget);
        let obj = 0, show = '', type = '';
        if (btn.classList.contains('anime')) {
            obj = anime;
            type = 'anime';
            if (btn.classList.contains('attack-on-titan')) {
                show = 'Attack on Titan';
            } else if (btn.classList.contains('spy-x-family')) {
                show = 'Spy x Family';
            } else if (btn.classList.contains('jujutsu-kaisen')) {
                show = 'Jujutsu Kaisen';
            }
        } else if (btn.classList.contains('movie')) {
            obj = movies
            type = 'movies'
            if (btn.classList.contains('red-notice')) {
                show = 'Red Notice';
            } else if (btn.classList.contains('spiderman')) {
                show = 'Spiderman: No Way Home';
            }
        }
        console.log(obj);
        openModal(modal);
        modal.scrollTop = 0;
        showDetails(show, obj, type);
    })
})

closePopUp.addEventListener('click', () => {
    const modal = document.querySelector('.pop-up');
    removeGenreButton();
    closeModal(modal);
})

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.pop-up.active');
    removeGenreButton();
    closeModal(modal);
})

const showDetails = (title, obj, type) => {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].title === title) {
            for (let j = 0; j < obj[i].genre.length; j++) {
                const createButton = document.createElement('button');
                createButton.innerHTML = obj[i].genre[j];
                genreButton.appendChild(createButton);
            }
            header.innerHTML = `${obj[i].title}`;

            mid.innerHTML = `<span id="released">${obj[i].released}</span>
                <span>${obj[i].duration}</span>
                <button><i class="fa-regular fa-star"></i>Score</button>`;

            rating.innerHTML = `<h2>Score</h2>
                <i class="fa-solid fa-star fa-2x"></i>
                <span class="rate">${obj[i].rate}</span>
                <span>/10</span>`;

            synopsis.innerHTML = `<h2>Synopsis</h2>
            <p>${obj[i].p1}</p>
            <p>${obj[i].p2}</p>`;
            
            if (type === 'anime') {
                information.innerHTML = `<img src="${obj[i].poster}">
                <div class="information">
                    <h2>Information</h2>
                    <div class="underline"></div>
                    <table>
                        <tr>
                            <td class="first">Type</td>
                            <td class="first">:</td>
                            <td class="type">${obj[i].type}</td>
                        </tr>
                        <tr>
                            <td class="first">Episodes</td>
                            <td class="first">:</td>
                            <td class="episodes">${obj[i].episodes}</td>
                        </tr>
                        <tr>
                            <td class="first">Status</td>
                            <td class="first">:</td>
                            <td class="status">${obj[i].status}</td>
                        </tr>
                        <tr>
                            <td class="first">Aired</td>
                            <td class="first">:</td>
                            <td class="aired">${obj[i].aired}</td>
                        </tr>
                        <tr>
                            <td class="first">Premiered</td>
                            <td class="first">:</td>
                            <td class="premiered">${obj[i].premiered}</td>
                        </tr>
                        <tr>
                            <td class="first">Producers</td>
                            <td class="first">:</td>
                            <td class="producers">${obj[i].producers}</td>
                        </tr>
                        <tr>
                            <td class="first">Studios</td>
                            <td class="first">:</td>
                            <td class="studios">${obj[i].studios}</td>
                        </tr>
                        <tr>
                            <td class="first">Source</td>
                            <td class="first">:</td>
                            <td class="source">${obj[i].source}</td>
                        </tr>
                        <tr>
                            <td class="first">Licensors</td>
                            <td class="first">:</td>
                            <td class="licensors">${obj[i].licensors}</td>
                        </tr>
                        <tr>
                            <td class="first">Rating</td>
                            <td class="first">:</td>
                            <td class="rating">${obj[i].rating}</td>
                        </tr>
                    </table>
                </div>`;
            } else {
                information.innerHTML = `<img src="${obj[i].poster}">
                <div class="information">
                    <h2>Information</h2>
                    <div class="underline"></div>
                    <table>
                        <tr>
                            <td class="first">Director</td>
                            <td class="first">:</td>
                            <td class="type">${obj[i].director}</td>
                        </tr>
                        <tr>
                            <td class="first">Writter</td>
                            <td class="first">:</td>
                            <td class="episodes">${obj[i].writter}</td>
                        </tr>
                        <tr>
                            <td class="first">Cinematography</td>
                            <td class="first">:</td>
                            <td class="status">${obj[i].cinematography}</td>
                        </tr>
                        <tr>
                            <td class="first">Production</td>
                            <td class="first">:</td>
                            <td class="aired">${obj[i].production}</td>
                        </tr>
                        <tr>
                            <td class="first">Released</td>
                            <td class="first">:</td>
                            <td class="premiered">${obj[i].aired}</td>
                        </tr>
                        <tr>
                            <td class="first">Producers</td>
                            <td class="first">:</td>
                            <td class="producers">${obj[i].producers}</td>
                        </tr>
                        <tr>
                            <td class="first">Distributor</td>
                            <td class="first">:</td>
                            <td class="studios">${obj[i].distributor}</td>
                        </tr>
                        <tr>
                            <td class="first">Country</td>
                            <td class="first">:</td>
                            <td class="source">${obj[i].country}</td>
                        </tr>
                        <tr>
                            <td class="first">Language</td>
                            <td class="first">:</td>
                            <td class="licensors">${obj[i].language}</td>
                        </tr>
                        <tr>
                            <td class="first">Rating</td>
                            <td class="first">:</td>
                            <td class="rating">${obj[i].rating}</td>
                        </tr>
                    </table>
                </div>`;
            }
        }
    }
}

const openModal = (modal) => {
    if (!modal) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

const closeModal = (modal) => {
    if (!modal) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

const removeGenreButton = () => {
    const allGenreButton = genreButton.querySelectorAll('button');
    for (let i = 0; i < allGenreButton.length; i++) {
        genreButton.removeChild(allGenreButton[i]);
    }
}