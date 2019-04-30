function random_btn(){
    let rdm_array = [];
	let arvore = {};
    do{
        let ale = Math.floor(Math.random() * 9 + 1);
        if($.inArray(ale, rdm_array) === -1){
			insert(arvore,ale);
            rdm_array.push(ale)
        }        
    }while(rdm_array.length < 9);

    for(let i=1; i <= rdm_array.length; i++){
        $(`td#tb-value-${i}`).text(rdm_array[i-1] == 9?'':rdm_array[i-1])
    }
	console.log(arvore);
    return rdm_array
}
 
function insert(vetor, value){
    if(vetor.value){
        if(value > vetor.value){
            insert(vetor.right, value)
        }else{
            insert(vetor.left, value)
        }
    }else{
        vetor.value = value
        vetor.right = {}
        vetor.left = {}
    }
}

function random_btn_img(){
    let rdm_array = [];
    do{
        let ale = Math.floor(Math.random() * 9 + 1);
        if($.inArray(ale, rdm_array) === -1){
            rdm_array.push(ale)
        }        
    }while(rdm_array.length < 9);
    for(let i=1; i <= rdm_array.length; i++){
        $(`td#tb-value-img-${i}`).html(rdm_array[i-1] == 9?'': `<img src="img/${rdm_array[i-1]}.jpg" alt="" class="img-table">`)
    }
    return rdm_array
}

function ordey_btn(){
    for(let i=1; i <= 9; i++){
        $(`td#tb-value-${i}`).text(i == 9?'':i)
    }
}

function ordey_btn_img(){
    for(let i=1; i <= 9; i++){
        $(`td#tb-value-img-${i}`).html(`<img src="img/${i == 9?'':i}.jpg" alt="" class="img-table">`)
    }
}

function tipo_number(){
    $('div#div-number, div#div-btn').removeClass("none_hidden");
    $('div#div-img, div#div-img').removeClass("none_hidden");
    $('div#div-img, div#div-img').addClass("none_hidden");
}

function tipo_img(){
    $('div#div-number, div#div-btn').removeClass("none_hidden");
    $('div#div-img, div#div-img').removeClass("none_hidden");
    $('div#div-number, div#div-btn').addClass("none_hidden");
}

$(document).ready(() => {
    $('div#div-img, div#div-img').addClass("none_hidden");
   $('.ceil-table').on('click', function(){
       let id = $(this).attr('id');
       let split_id = parseInt(id.split('-')[2]);
       let value = $(`td#tb-value-${split_id}`).text();
    
       if(
           $(`td#tb-value-${split_id-1}`) && 
           $(`td#tb-value-${split_id-1}`).text() === '' && 
           split_id-1 <= 9 && 
           split_id-1 > 0 &&
           split_id != 7 &&
           split_id != 4
        ){
        $(`td#tb-value-${split_id-1}`).text(value);
        $(`td#tb-value-${split_id}`).text('');
       }

       if(
           $(`td#tb-value-${split_id+1}`) && 
           $(`td#tb-value-${split_id+1}`).text() === '' && 
           split_id !== 9 && 
           split_id+1 <= 9 && 
           split_id+1 > 0
        ){
            $(`td#tb-value-${split_id+1}`).text(value);
            $(`td#tb-value-${split_id}`).text('');   
       }

       if(
            $(`td#tb-value-${split_id+3}`) && 
            $(`td#tb-value-${split_id+3}`).text() === '' && 
            split_id !== 9 && 
            split_id+3 <= 9 && 
            split_id+3 > 0
        ){
            $(`td#tb-value-${split_id+3}`).text(value);
            $(`td#tb-value-${split_id}`).text('');   
        }

        if(
            $(`td#tb-value-${split_id-3}`) && 
            $(`td#tb-value-${split_id-3}`).text() === '' && 
            split_id-3 <= 9 && 
            split_id-3 > 0
        ){
            $(`td#tb-value-${split_id-3}`).text(value);
            $(`td#tb-value-${split_id}`).text('');   
        }

   });
   
   $('.ceil-table-img').on('click', function(){
    let id = $(this).attr('id');
    let split_id = parseInt(id.split('-')[3]);
    let value = $(`td#tb-value-img-${split_id}`).html();
 
    if(
        $(`td#tb-value-img-${split_id-1}`) && 
        $(`td#tb-value-img-${split_id-1}`).html() === '' && 
        split_id-1 <= 9 && 
        split_id-1 > 0 &&
        split_id != 7 &&
        split_id != 4
     ){
     $(`td#tb-value-img-${split_id-1}`).html(value);
     $(`td#tb-value-img-${split_id}`).html('');
    }

    if(
        $(`td#tb-value-img-${split_id+1}`) && 
        $(`td#tb-value-img-${split_id+1}`).html() === '' && 
        split_id !== 9 && 
        split_id+1 <= 9 && 
        split_id+1 > 0
     ){
         $(`td#tb-value-img-${split_id+1}`).html(value);
         $(`td#tb-value-img-${split_id}`).html('');   
    }

    if(
         $(`td#tb-value-img-${split_id+3}`) && 
         $(`td#tb-value-img-${split_id+3}`).html() === '' && 
         split_id !== 9 && 
         split_id+3 <= 9 && 
         split_id+3 > 0
     ){
         $(`td#tb-value-img-${split_id+3}`).html(value);
         $(`td#tb-value-img-${split_id}`).html('');   
     }

     if(
         $(`td#tb-value-img-${split_id-3}`) && 
         $(`td#tb-value-img-${split_id-3}`).html() === '' && 
         split_id-3 <= 9 && 
         split_id-3 > 0
     ){
         $(`td#tb-value-img-${split_id-3}`).html(value);
         $(`td#tb-value-img-${split_id}`).html('');   
     }

});
});