/* global CONVARGO*/
'use strict';

(() => {
  // const render = (actors) => {
  //   const fragment = document.createDocumentFragment();
  //   const div = document.createElement('div');
  //   const template = actors.map(actor => {
  //     return `
  //       <div class="actor">
  //         <span class="col-md-4">${actor.who}</span>
  //         <span class="col-md-4">${actor.type}</span>
  //         <span class="col-md-4">${actor.amount}</span>
  //       </div>
  //     `;
  //   }).join('');

  //   div.innerHTML = template;
  //   fragment.appendChild(div);
  //   document.querySelector('#actors').innerHTML = '';
  //   document.querySelector('#actors').appendChild(fragment);
  // };

  // This function render the result into a Bootstrap table DOM object
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');
    table.className = "table";
    var p = document.createElement('p');
    p.innerHTML = 'Results based on the informations you filled:';
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    ["Actor", "Type of payment", "Amount"].forEach(function (element) {
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(element));
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    actors.forEach(function (actor) {
      var tr = document.createElement("tr");
      tr.className = "actor";
      for (var element in actor) {
        var td = document.createElement("td");
        td.className = "col-md-4";
        td.appendChild(document.createTextNode(actor[element]))
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    fragment.appendChild(table);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(p);
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick() {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();
