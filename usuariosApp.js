$(function () {
    hide();
    /** Hiding UserVehicule BUTTON if admin */
    function hide(){
       $.ajax({
           type: "GET",
           url: "php/isAdmin.php",
           
          
           success: function (response) {
               if(response==1){
                   $('#userVehiculos').hide();
               } 
               if(response == 0) {
                   $('#userVehiculos').show();
               }
           }
       });
   }
    /** now loggin out */
    $(document).on('click', '#logout', function(){
        $.ajax({
            type: "GET",
            url: "php/vehiculos/logOut.php",
            
            success: function (response) {
                window.location.href='index.php';
            }
        });
    });

    /** Navigating */
    $(document).on('click', '#register', function(e){

        e.preventDefault();
        
        window.location.href = 'register_app.php';

    });

    /** Navigating */
    $(document).on('click', '.dashi', function(){

       
        
        //window.location.href = 'dashboard.php';
        console.log('You really do not want to go there.');

    });
    /** Navigating */
    $(document).on('click', '#mantenimientos', function(){
        document.location = 'vehiculos.php';
    })
    /** For navigation */
    $(document).on('click', '#usuarios', function(e){

        //e.preventDefault();
        window.location.href = 'usuarios.php';

    });

    /** For navigation */
    $(document).on('click', '#historial', function(e){
        //e.preventDefault();
        window.location.href = 'historial.php';

    });

   /** Listing  */
    function listing(){
        $.ajax({
            type: "GET",
            url: "php/usuarios/listar.php",
            data: "data",
            
            success: function (response) {
                // Gettin usable object
                let users = JSON.parse(response);
                // Console checking
                console.log(users);
                /**Template that will be send to the HTML */
                let template = '';
                //
                users.forEach( user => {
                /** Some back-ticks magics */
                    template+=`
                        <tr class='hover' userId=${user.id}> <!-- NO NEED TO PAY ATENTION HERE-->

                            <!--td>${user.id}</td-->

                            <td class='getDevice'><a href='#' >${user.nombre}</a></td>
                            
                           

                        </tr>
                            `
                $('#registros').html(template);
                });
            }
        });
    }
    listing();

   
    /** Logic for the updating process. (Sólo que acá no updateamos)
     *  Part 1/2
     * */
    $(document).on('click', '.getDevice', function(){
        /** The whole 'getting id' process is sortof important 
         *  you might want to take a good look at it.
        */
        let element = $(this)[0].parentElement;
        let id = $(element).attr('userId');
        console.log(id);
        
        
        /** Ajax posting it */
        $.ajax({
            /** POST cause we gonna send that son some info. */
            type: "POST",
            url: "php/usuarios/getSingleUserDevices.php",
            
            data: {id: id},
            success: function (response) {
                if (response==false){
                    let empty = '';
                    $('#registro2').html(empty);
                    alert('Este usuario no posee ningún dispositivo registrado.')

                } else {
                    // Console checking
                    console.log(response);
                    let devices = JSON.parse(response);
                    
                    /**Template that will be send to the HTML */
                    let template = '';
                    //
                    devices.forEach( device => {
                    /** Some back-ticks magics */
                        template+=`
                            <tr class='hover'> <!-- NO NEED TO PAY ATENTION HERE-->

                                <td devId=${device.id} devName=${device.num} class='getId'>
                                    ${device.num} 
                                </td>

                                <td>${device.velocidad}</td>
                                
                                <td>${device.distance}</td>

                                <td class='colorFul'>${device.lastUpdate}</td>

                            </tr>
                                `
                    $('#registro2').html(template);
                    
                    });
                }
                
            }
        });
              
        /** Lets try with another Ajax call to COLOR IT OUT */
        $.ajax({
            type: "POST",
            url: "php/usuarios/colorful.php",
            data: {id: id},
            
            success: function (response) {
                setTimeout(function(){
                    console.log(response);
                    let dinamica = JSON.parse(response); 
                    console.log(dinamica);        
                    // I don't really know how, but i did it               
                        $(".colorFul").each(function(i, elem){
                                var colorFul = $(this);
                                    if (dinamica[i] <= 86400) {
                                        //console.log(elem); Nicely green
                                        color = 'rgba(40, 255, 126, 0.734)';
                                        $(this).css("background-color",color);
                                    }
                                    else if ((dinamica[i] > 86400) && (dinamica[i] < 172800)) {
                                        //console.log(elem); Yellow
                                        color = 'rgba(242, 255, 3, 0.686)';
                                        $(this).css("background-color",color);
                                    }
                                    else if (dinamica[i] >= 172800) {
                                        //console.log(elem); Rojo
                                        color = 'rgba(255, 36, 36, 0.752)';
                                        $(this).css("background-color",color);
                                    }
                                    
                        });
    
                },2000);

            }
            
        });
       
    });

    $(document).on('click', '.getId', function(){
        /** The whole 'getting id' process is sortof important 
         *  you might want to take a good look at it.
        */
        let element = $(this)[0];
        let id = $(element).attr('devId');
        let name = $(element).text();
        console.log(name,id);
        
      
        
       
    });

  

   

});