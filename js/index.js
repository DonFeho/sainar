const ui = new UI();
ui.renderDefault();
const render = new Render('./data/areas.json', './data/data.json');
render.renderAreas();
render.renderTeam();



$('.s-slider').slick({
  dots: false,
  infinite: true,
  speed: 2400,
  fade: true,
  cssEase: 'ease-in-out',
  arrows: true,
  autoplay: true
});





//SCROLL
const scrollTop = y => window.scrollTo({ top: y, behavior: 'smooth' });
const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY
  };
}

//RENDER TARGETS
const bodyTeam = document.body.children[1];
const bodyAreas = document.body.children[2];


//Area Details
bodyAreas.addEventListener('click', e => {
  e.preventDefault();

  let el = document.getElementById('areas');
  let target = getOffset(el).top;

  let checkA = e.toElement.classList;
  let areaId = e.toElement.id;
  const allAreas = document.getElementById('practice-row');
  const addArea = document.getElementById('current-row');
  if (checkA.contains('area-selector')) {
    render.renderCurrentArea(areaId);
    addArea.classList.remove('d-none');
    allAreas.classList.add('d-none');
    scrollTop(target);

  }
  if (checkA.contains('btn-back')) {
    allAreas.classList.remove('d-none');
    addArea.classList.add('d-none');
    scrollTop(target);

  }
});


// TeamOption
bodyTeam.addEventListener('click', e => {
  // e.preventDefault();
  let cl = e.toElement.classList;
  let id = e.toElement.parentElement.parentElement.parentElement.parentElement.id;
  //Main
  const aI = document.getElementById('aI');
  const aN = document.getElementById('aN');
  //additional
  const aIContent = document.getElementById('aIContent');
  const aNContent = document.getElementById('aNContent');
  //Back
  let back = cl.contains('btn-back-team');

  if (id === 'aI') {
    aIContent.classList.remove('d-none');
    aN.classList.add('d-none');
  }
  else {
    if (id === 'aN') {
      aNContent.classList.remove('d-none');
      aI.classList.add('d-none');
    }
  }
  if (back) {
    aIContent.classList.add('d-none');
    aNContent.classList.add('d-none');
    aN.classList.remove('d-none');
    aI.classList.remove('d-none');
  }
});