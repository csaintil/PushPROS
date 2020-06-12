// const { result } = require("lodash");

$(document).ready(function(){
    $('#loadData').click(function(event){
        let  url = 'http://aimtell.com/files/sites.json';
        $.ajax({
            url,
            success:function(data){
            // console.log('success', data.sites);
            let result ='';
            data.sites.forEach(element => {
             // console.log(element)
                result+= `
                <div class=q  >
                <div class=person id=person_id>${element.id} </div>
                <div class=name_Url>
                <div class=person id=person_name>${element.name}</div>
                <div class= person  id=person_url>${element.url}</div>
                </div>
                </div>
                `
            });

            $('#main_container').append(result);



            }
        })

    })

    console.log("loaded")

});


