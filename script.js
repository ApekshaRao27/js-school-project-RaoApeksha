fetch('events.json')
  .then(r => r.json())
  .then(events => {
    const timeline = document.getElementById('timeline');
    const nav = document.querySelector('.timeline-nav');

    events.forEach((ev, i) => {
      const year = document.createElement('span');
      year.className = 'year';
      year.dataset.index = i;
      year.innerHTML = `${ev.year}`;
      year.addEventListener('click', () => selectYear(i));
      nav.appendChild(year);
    });
    // default year
    selectYear(0);
    function selectYear(i) {
      // highlights active year   
      nav.querySelectorAll('.year').forEach(el => el.classList.remove('active'));
      const activeYear = nav.querySelector(`.year[data-index="${i}"]`);
      if (activeYear) activeYear.classList.add('active');
      renderEvent(events[i], i);
    }

    function renderEvent(ev, i) {
      timeline.innerHTML = `
        <article>
          <h2>${ev.year}</h2>
          <h3>${ev.title}</h3>
          <figure>
            <img src="${ev.imageURL}" alt="${ev.title}" style="width:100%; max-height:400px;">
            <figcaption>${ev.description}</figcaption>
            <p>Category: ${ev.category}</p>
          </figure>
          <button class="learn-more" data-index="${i}">Learn More</button>
        </article>
      `;
      timeline.querySelector('.learn-more').addEventListener('click', (e) => {
        openModal(events[e.currentTarget.dataset.index]);
      });
    }
  });

const modal = document.getElementById('modal');
document.querySelector('#modal .close-btn').addEventListener('click', () => {
  modal.classList.remove('active');
});

function openModal(ev) {
  document.getElementById('modalTitle').textContent = ev.title;
  document.getElementById('modalText').textContent = ev.moreInfo || ev.description;
  modal.classList.add('active');
}


//transition between dark and light mode while clicking the toggle button
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



