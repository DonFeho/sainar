class UI {
  constructor() {
    this.footer = document.getElementById('main-footer');
    this.cta = document.getElementById('cta');
  }

  renderDefault() {
    this.cta.innerHTML = `
      <div class="container text-white py-5">
        <div class="row text-center">
          <div class="col-xs-9 col-sm-9 col-md-9 col-lg-5 col-xl-5 mb-5 mx-auto">
            <div class="d-flex align-items-end flex-column" style="height: auto;">
              <div class="mt-auto">
                <h2 class="mt-5 text-soft">Отримати Консультацію</h2>
                <hr>
                <div class="form-over">
                  <p class="">Ви можете прямо зараз поставити своє запитання або окреслити проблему та залишити контактні
                    данні для зв'язку. </p>

                  <form action="https://formspree.io/sainar.info@gmail.com" method="POST">
                    <div class="form-group">
                      <input id="name" type="text" value="" placeholder="Ім я" data-msg-required="І'мя" maxlength="100"
                        name="name" required="" class="form-control">
                    </div>
                    <div class="form-group">
                      <input id="email" type="email" value="" placeholder="email" data-msg-required="Введіть Вашу email"
                        data-msg-email="Будь-ласка введіть коректний email" maxlength="100" name="email" required=""
                        class="form-control">
                    </div>
                    <div class="form-group">
                      <input id="phone" type="text" value="" placeholder="телефон"
                        data-msg-required="Введіть Ваше телефон" maxlength="100" name="phone" required=""
                        class="form-control">
                    </div>
                    <div class="form-group">
                      <label for="message"> Повідомлення </label>
                      <textarea id="message" maxlength="5000" value="" placeholder="Повідомлення"
                        data-msg-required="Введіть Ваше повідомлення" rows="3" name="message" required=""
                        class="form-control"> 
                      </textarea>
                    </div>
                    <div class="form-group">
                      <input type="submit" value="Надіслати" data-loading-text="Loading..."
                        class="btn btn-gold-form btn-block">
                    </div>
                  </form>        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    this.footer.innerHTML = `
      <div class="container pt-3">
        <div class="row mx-auto text-left">
          <div class="col-md-12 text-left">
            <h3 class="text-soft">Контакти</h3>
            <hr>
          </div>
          <div class="col-md-6 col-lg-5 text-left">
            <ul class="list-unstyled list-icons">
              <li>
                <p>
                  <i class="fas fa-map-marker pr-3"></i>
                  Городоцька 300, Львів, Україна
                </p>
              </li>
              <li>
                <p>
                  <i class="fas fa-clock pr-3"></i>
                  Пн. - Птн.: 09:00 - 18:00
                </p>
              </li>
              <li>
                <p>
                  <i class="fas fa-clock pr-3"></i>
                  Сб. - Нд.: вихідний
                </p>
              </li>
              <li>
                <a href="mailto:sainar.info@gmail.com">
                  <p class="text-gold"> <i class="fas fa-envelope-open pr-3"></i> sainar.info@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-3 text-left">
            <ul class="list-unstyled list-icons">
              <li>
                <a href="#">
                  <b class="lead text-soft"> <i class="fas fa-phone-volume mr-1"></i> (066) 854-46-73</b>
                </a>
              </li>
             
            </ul>
          </div>
          <div class="col-md-6 d-none d-lg-block col-lg-4 text-left">
            <p class="m-0 p-0">
              Для вирішення нестандартних ситуацій компетенції штатних юристів постійно не вистачає.
              Ефективною альтернативою у таких випадках є повна передача юридичних питань на абонентське
              обслуговування.</p>
          </div>
          <div class="col-md-4 pt-5 text-left">
            <p class="text-soft"> ТОВ САІНАР &copy; 2019</p>
          </div>
        </div>
      </div>
    
    
    `;
  }
}



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