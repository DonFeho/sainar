class Render {
  constructor(data, team) {
    this.data = data;
    this.team = team;
  }

  async fetchAndRender() {
    const response = await fetch(this.data);
    return await response.json();
  }

  async fetchAndRenderTeam() {
    const response = await fetch(this.team);
    return await response.json();
  }


  renderTeam() {
    this.fetchAndRenderTeam().then(units => {
      let output = '';
      units.forEach(unit => {
        output += `        
          <div id="${unit.id}" class="col-md-12 col-lg-5 mr-auto ml-auto">
            <div class="card-team">
              <div class="card-body">
                <img src="${unit.avatar}" alt="" class="team-img rounded-circle">
              </div>
              <div class="card-title">
                <a href="#!">
                  <h4 class="mb-0">${unit.firstName} ${unit.lastName}</h4>
                </a>
                <small> ${unit.role}</small>
              </div>
              <div class="card-footer my-auto mx-auto ">
                <a href="${unit.eLink}" class="p-3">
                  <i class="fas fa-envelope fa-1x"></i>
                </a>
                <a href="${unit.pLink}" class="p-3">
                  <i class="fas fa-phone fa-2x"></i>
                </a>
                <a href="${unit.fbLink}" target="_blank" class="p-3">
                  <i class="fab fa-facebook fa-1x"></i>
                </a>
              </div>
            </div>
          </div>
          <div id="${unit.id}Content" class="col-md-12 col-lg-7 text-left px-5 text-soft mx-auto mt-3 d-none">
            <hr>
            <p>
              ${unit.scope}              
              <br>
              ${unit.scope2}       
              <br>
              Учасник Асоціації правників України та Львівської обласної колегії адвокатів.
            </p>       
            <p>
              ${unit.spec} 
            </p>
            <div class="row py-3">
              <div class="col-md-11 text-right">
                <a href="#!" class="btn-back-team btn btn-gold-dark">
                  інші правники
                  <i class="fas fa-chevron-circle-right ml-3"> </i>
                </a>
              </div>
            </div>
          </div>
        `;
      });
      document.getElementById('team-output').innerHTML = output;
    });
  }


  renderCurrentArea(areaId) {
    this.fetchAndRender().then(units => {
      let output, servOtp = '';
      let serv;

      units.forEach(unit => {
        if (unit.id == areaId) {
          serv = unit.serv;
          output += `
            <div class="col-md-12 col-lg-12 mx-auto">
              <span>                
                <h2 class="text-left mt-4 text-gold"> <i class="${unit.icon} text-gold"> </i> ${unit.name}</h2>              
              </span>
              <hr>
                <p class="text-prime">${unit.add}</p>
            </div>
            <div class="col-md-12 col-lg-12 mx-auto text-prime">
              <h4 class="mt-2 mb-3">Послуги:</h4>
              <ul id="serv" class="list-unstyled">               
              </ul>            
              <hr>              
            </div> 
            <div class="col-md-11 col-lg-12 text-right">
              <a href="#areas" class="btn-back btn btn-gold">
                інші практики 
                <i class="fas fa-chevron-circle-right ml-3"> </i>
              </a>
            </div>
              
          `;
          serv.map((s) => {
            servOtp += `
                <li class="list-item">
                  <span>
                    <p> <i class="${unit.icon} pr-2"> </i> ${s}</p>
                  </span>
                </li>
              `;
          })
        }
      })
      document.getElementById('current-row').innerHTML = output;
      document.getElementById('serv').innerHTML = servOtp;
    });
  }

  renderAreas() {
    this.fetchAndRender().then(units => {
      let output = '';
      units.forEach(unit => {
        output += `
          <div class="area text-center">            
            <div class="card">
              <div class="card-title
              pt-4">
                <i class="${unit.icon} fa-3x"> </i>
              </div>
              <div class="card-body pt-2">
                <a href="#hash">
                  <h5 id="${unit.id}" class="area-selector">${unit.area}</h5>
                </a>
                <small class="d-none d-sm-block">${unit.content}</small>                  
              </div>                
            </div>
            
          </div>           
        `;
      })
      document.getElementById('areas-output').innerHTML = output;
    });
  }

}