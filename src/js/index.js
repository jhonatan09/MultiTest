var modalData = {
    method: {
        Takedatas: function(){
            // localStorage.setItem('@B2W:OrderThird', JSON.stringify(cartDetails));
            $(".modal-content_bottom-body_btn").click(function(e){
                e.preventDefault();
                var name = $("#name").val()
                var email = $("#email").val()
                if(name === '' && email === ''){
                    alert("Preencha todos os campos!")
                }else{
                    $(".modal-cupom").removeClass("hidden");
                    $(".modal-cadastro").addClass("hidden");
                }
            })
        },


        Actions: function(){
            $(".close-modal-cupom-js").click(function(){
                $(".modal-cupom").addClass("hidden");
                $(".open-modal").removeClass("hidden");
            })

            $(".close-modal-js").click(function(){
                $(".modal-cadastro").addClass("hidden");
                $(".open-modal").removeClass("hidden");
            })

            $(".open-modal").click(function(){
                $(".modal-cadastro").removeClass("hidden");
                $(this).addClass("hidden");
            })
        },

        init: function () {
           this.Takedatas();
           this.Actions();
        },
    },

    mounted: function () {
        return this.method.init();
    },
};



$(document).ready(function () {
    modalData.mounted();
});
