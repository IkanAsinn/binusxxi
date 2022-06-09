const openPopUp = document.querySelectorAll('[data-modal-target]');
const closePopUp = document.querySelectorAll('.close-btn');
const overlay = document.querySelector('.overlay2');
const header = document.querySelector('.header h1');
const mid = document.querySelector('.header .mid');
const showRate = document.querySelector('.rating .rate');
const information = document.querySelector('.container-1');
const genreButton = document.querySelector('.genre-btn');
const synopsis = document.querySelector('.synopsis');
const allInput = document.querySelectorAll('#score input');
const bookBtn = document.querySelector('.nav-btn .book');

import {series as series} from './series.js';
import {movies as movies} from './movies2.js';

console.log(openPopUp);

openPopUp.forEach(btn => {
    btn.addEventListener('click', () => {
        // const popUp = document.querySelectorAll('[data-modal-target]');
        const modal = document.querySelector(btn.dataset.modalTarget);
        console.log(btn);
        console.log(modal);

        const curr = document.querySelector('.pop-up.show');
        let obj = 0, show = '', type = '';
        if (btn.classList.contains('open')) {
            btn.classList.add('on');
        }

        const onBtn = document.querySelector('.open.on');
        if (onBtn.classList.contains('series')) {
            obj = series;
            type = 'series';
            if (onBtn.classList.contains('attack-on-titan')) {
                show = 'Attack on Titan';
            } else if (onBtn.classList.contains('spy-x-family')) {
                show = 'Spy x Family';
            } else if (onBtn.classList.contains('jujutsu-kaisen')) {
                show = 'Jujutsu Kaisen';
            } else if (onBtn.classList.contains('mha')) {
                show = 'My Hero Academia';
            } else if (onBtn.classList.contains('tfto')) {
                show = 'Twenty Five Twenty One';
            } else if (onBtn.classList.contains('itaewon')) {
                show = 'Itaewon Class';
            } else if (onBtn.classList.contains('start-up')) {
                show = 'Start-Up';
            } else if (onBtn.classList.contains('taxi')) {
                show = 'Taxi-Driver';
            } else if (onBtn.classList.contains('goblin')) {
                show = 'Goblin';
            } else if (onBtn.classList.contains('dots')) {
                show = 'Descendants of The Sun';
            } else if (onBtn.classList.contains('kny')) {
                show = 'Kimetsu no Yaiba: Yuukaku Hen';
            } else if (onBtn.classList.contains('naruto')) {
                show = 'Naruto Shippuden';
            } else if (onBtn.classList.contains('fma')) {
                show = 'Fullmetal Alchemist: Brotherhood';
            } else if (onBtn.classList.contains('tln')) {
                show = 'The Liberation Notes';
            } else if (onBtn.classList.contains('onepiece')) {
                show = 'One Piece';
            } else if (onBtn.classList.contains('vincenzo')) {
                show = 'Vincenzo';
            } else if (onBtn.classList.contains('ylag')) {
                show = 'Young Lady and Gentleman';
            } else if (onBtn.classList.contains('haikyuu')) {
                show = 'Haikyuu!!';
            }else if (onBtn.classList.contains('st4')) {
                show = 'Stranger Things 4';
            }
          
        } else if (onBtn.classList.contains('movie')) {
            obj = movies
            type = 'movies'
            if (onBtn.classList.contains('red-notice')) {
                show = 'Red Notice';
            } else if (onBtn.classList.contains('spiderman')) {
                show = 'Spiderman: No Way Home';
            } else if (onBtn.classList.contains('morbius')) {
                show = 'Morbius';
            } else if (onBtn.classList.contains('Venom')) {
                show = 'Venom';
            } else if (onBtn.classList.contains('uncharted')) {
                show = 'Uncharted';
            } else if (onBtn.classList.contains('doctor-strange')) {
                show = 'Doctor Strange in the Multiverse of Madness';
            } else if (onBtn.classList.contains('endgame')) {
                show = 'Avengers: Endgame';
            } else if (onBtn.classList.contains('KKN')) {
                show = 'KKN Di Desa Penari';
            } else if (onBtn.classList.contains('infinity')) {
                show = 'Avengers: Infinity War';
            } else if (onBtn.classList.contains('black-panther')) {
                show = 'Black Panther';
            } else if (onBtn.classList.contains('ironman-3')) {
                show = 'Iron Man 3';
            } else if (onBtn.classList.contains('contractor')) {
                show = 'The Contractor'
            } else if (onBtn.classList.contains('no-time-to-die')) {
                show = 'No Time To Die';
            } else if (onBtn.classList.contains('scream')) {
                show = 'Scream';
            } else if (onBtn.classList.contains('eternals')) {
                show = 'Eternals';
            } else if (onBtn.classList.contains('venom-carnage')) {
                show = 'Venom: Let There Be Carnage';
            } else if (onBtn.classList.contains('shang-chi')) {
                show = 'Shang-Chi and the Legend of the Ten Rings';
            } else if (onBtn.classList.contains('yowis')) {
                show = 'Yowis ben finale';
            } else if (onBtn.classList.contains('kambodja')) {
                show = 'Kambodja';
            } else if (onBtn.classList.contains('jujutsu-0')) {
                show = 'Jujutsu Kaisen 0';
            } else if (onBtn.classList.contains('fantastic-beast')) {
                show = 'Fantastic Beasts: The Secrets of Dumbledore';
            } else if (onBtn.classList.contains('cinderella')) {
                show = 'Cinderella and the Little Sorcerer';
            } else if (onBtn.classList.contains('maverick')) {
                show = 'Top Gun Maverick';
            } else if (onBtn.classList.contains('doll-3')) {
                show = 'The Doll 3';
            } else if (onBtn.classList.contains('round-up')) {
                show = 'The Round Up';
            } else if (onBtn.classList.contains('srimulat')) {
                show = 'Srimulat: Hil yang Mustahal';
            } else if (onBtn.classList.contains('doraemon')) {
                show = 'Doraemon: Nobita Little Star Wars';
            } else if (onBtn.classList.contains('Anek')) {
                show = 'Anek';
            }else if (onBtn.classList.contains('ancestral')) {
                show = 'The Ancestral';
            }
        }

        if (modal.classList.contains('main')) {
            modal.scrollTop = 0;
            // console.log(modal);
            openModal(modal);
            testClose(curr);
            testOpen(modal);
            removeGenreButton();
            showDetails(show, obj, type);
        } 
        else if (btn.classList.contains('submit-btn')) {
            let isValid = false
            for (let i = 0; i < allInput.length; i++) {
                if (allInput[i].checked) {
                    isValid = true;
                    calculateScoreAvg(show, obj, parseInt(allInput[i].value));
                    break;
                }
            }
            if (!isValid) {
                alert('Error! Please Check Your Input!');
            } else {
                testClose(curr);
                testOpen(modal);
                showScore(show, obj);
            }
        } else {
            testClose(curr);
            testOpen(modal);
        }
    })
})

closePopUp.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.querySelectorAll('.pop-up');
        removeGenreButton();
        resetInput();
        modal.forEach(e => {
            closeModal(e);
            testClose(e);
        })
    })
})

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.pop-up.show');
    const test = document.querySelector('.pop-up.active');

    resetInput();
    if (modal.classList.contains('active')) {
        closeModal(test);
        testClose(modal);
        removeGenreButton();
    } else {
        testClose(modal);
        testOpen(test)
    }
})

const showScore = (title, obj) => {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].title === title) {
            showRate.value = obj[i].rate;
        }
    }
}

const calculateScoreAvg = (title, obj, val) => {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].title === title) {
            obj[i].scores.push(val);
            const avg = calculateAvg(obj[i].scores);
            obj[i].rate = avg;
        }
    }
}

const calculateAvg = (array) => {
    const sum = array.reduce((acc, num) => {
        acc += num;
        return acc;
    }, 0);
    return (Math.round(sum / array.length * 100) / 100).toFixed(2);
}

const showDetails = (title, obj, type) => {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].title === title) {
            for (let j = 0; j < obj[i].genre.length; j++) {
                const createButton = document.createElement('a');
                createButton.innerHTML = obj[i].genre[j];
                createButton.setAttribute('href', '/binusxxi/movies?category=' + obj[i].genre[j].toLowerCase());
                createButton.setAttribute('class', 'genreBtn')
                genreButton.appendChild(createButton);
            }
        
            header.innerHTML = `${obj[i].title}`;

            const released = mid.querySelector('#released');
            const duration = mid.querySelector('#duration');
            released.innerHTML = obj[i].released;
            duration.innerHTML = obj[i].duration;

            showRate.value = obj[i].rate;

            synopsis.innerHTML = 
            `<h2>Synopsis</h2>
            <p>${obj[i].p1}</p>
            <p>${obj[i].p2}</p>`;
            
            if (type === 'series') {
                information.innerHTML = 
                `<img src="${obj[i].poster}">
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
                bookBtn.innerHTML = 'Watch';
            } else {
                information.innerHTML = 
                `<img src="${obj[i].poster}">
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
                bookBtn.innerHTML = 'Book';
            }
        }
    }
}

const openModal = (modal) => {
    if (!modal) return
    modal.classList.add('active');
    document.body.style.overflowY = 'hidden';
}

const testOpen = modal => {
    if (!modal) return;
    modal.classList.add('show');
    overlay.classList.add('show');
    overlap(modal);
}

const closeModal = (modal) => {
    if (!modal) return
    modal.classList.remove('active');
    document.body.style.overflowY = 'auto';
    offBtn();
}

const testClose = modal => {
    if (!modal) return;
    modal.classList.remove('show');
    overlay.classList.remove('show');
    dismiss(modal);
}

const removeGenreButton = () => {
    const allGenreButton = genreButton.querySelectorAll('a');
    for (let i = 0; i < allGenreButton.length; i++) {
        genreButton.removeChild(allGenreButton[i]);
    }
}

const overlap = (modal) => {
    if (!modal) return;
    modal.classList.add('overlap');
    overlay.classList.add('overlap');
}

const dismiss = (modal) => {
    if (!modal) return;
    modal.classList.remove('overlap');
    overlay.classList.remove('overlap');
}

const offBtn = () => {
    const openBtn = document.querySelectorAll('.open');
    openBtn.forEach(e => {
        e.classList.remove('on');
    })
}

const resetInput = () => {
    const rateRadio = document.querySelectorAll('.star input');
    rateRadio.forEach(e => {
        e.checked = false;
    })
}