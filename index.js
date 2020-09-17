var listCV = localStorage.getItem('listCV') == null ? [] : JSON.parse(localStorage.getItem('listCV'));

window.onload = function(){
    show();
}


function addClass(ID){
    listCV.forEach(element => {
        if(element.ID == ID)
        {
            element.status = !element.status
            
        }
    });
    localStorage.setItem('listCV', JSON.stringify(listCV));
    show();
}

function ondelete(ID){
    for( var i = 0; i < listCV.length; i++){ 
        if ( listCV[i].ID === ID) {
          listCV.splice(i, 1); 
        }
     }
     localStorage.setItem('listCV', JSON.stringify(listCV));
    show();
}

function show(){
    let HTML ='';
        listCV.forEach(element => {
            if(element.status){
                HTML += `<div id="${element.ID}" class="choice da-chon-0" onclick="addClass(${element.ID})">
                            <div class="selected">
                                <i class="fas fa-check select"></i>
                            </div>
                            <p id="p${element.ID}" class="da-chon">${element.name}</p>
                            <div class="ic-close"><i onclick="ondelete(${element.ID})" class="fas fa-times close"></i></div>
                        </div>`
                    }
            else{
                HTML += `<div id="${element.ID}" class="choice" onclick="addClass(${element.ID})">
                            <div class="selected">
                            </div>
                            <p id="p${element.ID}">${element.name}</p>
                            <div class="ic-close"><i onclick="ondelete(${element.ID})" class="fas fa-times close"></i></div>
                        </div>`
            }
        });
    document.getElementById('wp-content').innerHTML = HTML;
}

function myClick(){
    var title = {
        ID: listCV.length +1,
        name: document.getElementById("title").value,
        status: false
    }
    listCV.push(title);
    localStorage.setItem('listCV', JSON.stringify(listCV));
    document.getElementById("title").value = '';
    show();
}