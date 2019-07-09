$(function() {
    function init(){
        menu();
        modalNext();
        modalPrev();
        modalClose();
        imageDisplay();
    }
    init();
    //nav
    function menu() {
    $("#menu li").click(function() {
        let clicked = this.id;        
        $(this).addClass("active-li").siblings().removeClass("active-li");
        $(".active").addClass("inactive").removeClass("active");
        switch (clicked) {
            case "home":
                $("#main").addClass("active").removeClass("inactive").animate( {opacity: "1"}, "200");
                break;
            case "photo":
                $("#photography").addClass("active").removeClass("inactive").animate( {opacity: "1"}, "200");
                picturesAnimate($("#photography"));
                break;
            case "design":
                $("#designs").addClass("active").removeClass("inactive").animate( {opacity: "1"}, "200");               
                picturesAnimate($("#designs"));
                break;
            case "contact":
                $("#contacts").addClass("active").removeClass("inactive").animate( {opacity: "1"}, "200");
                contactAnimate();  
            break;
        };
    });
    }
    function buttonsHover() {
        //insta
        $("#instagram").mouseenter(function() {
            $("#background").css("background", "radial-gradient(circle at 30% 107%, rgba(253,244,151,0.3) 0%, rgb(253,244,151,0.3) 5%, rgb(253,89,73,0.3) 45%, rgb(253,89,73,0.3) 60%,rgb(40,90,235,0.3) 90%)");
        });
        $("#instagram").mouseleave(function() {
            $("#background").css("background", "none");
        });
        //fb
        $("#facebook").mouseenter(function() {
            $("#background").css("background", "rgba(59, 89, 152,0.6)");
        });
        $("#facebook").mouseleave(function() {
            $("#background").css("background", "none");
        });
        //dribbble
        $("#dribbble").mouseenter(function() {
            $("#background").css("background", "rgba(242, 103, 152 ,0.6)");
        });
        $("#dribbble").mouseleave(function() {
            $("#background").css("background", "none");
        });
        //behance
        $("#behance").mouseenter(function() {
            $("#background").css("background", "rgba(22, 102, 148 ,0.6)");
        });
        $("#behance").mouseleave(function() {
            $("#background").css("background", "none");
        });
    };
    
    buttonsHover();
    //modal img display
    function imageDisplay() {
        $(".picture").click(function() {
            let source = $(this).css('background-image');
            $("#modal").css("display", "block");
            $("#modal-display").css("background-image", source);
            $(this).addClass("current-modal");
        });
    };

    function modalNext(){
        $("#right").click(()=>{
            let nextToDisplay;
            if($(".current-modal").index()===$(".current-modal").siblings().length){
                nextToDisplay = $(".current-modal").siblings().first();
            }else{
                nextToDisplay = $(".current-modal").next();
            }            
            loadNext(nextToDisplay);
        });
    };

    function modalPrev(){
        $("#left").click( () => {
            let nextToDisplay;
            if($(".current-modal").index()===0){
                nextToDisplay = $(".current-modal").siblings().last();
            }else{
                nextToDisplay = $(".current-modal").prev();
            }            
            loadNext(nextToDisplay);
        });
    };
    function loadNext(nextToDisplay) {
        $(".current-modal").removeClass("current-modal");
        nextToDisplay.addClass("current-modal");
        $("#modal-display").css("background-image", nextToDisplay.css('background-image'));
    };

    function modalClose() {
        $("#close").click( () => {
            $(".current-modal").removeClass("current-modal");
            $("#modal").css("display", "none");
        });
    };
    /*animations*/
    function contactAnimate() {        
        $("#thank").animate( {left: "0px"}, "400");
        $("#buttons").animate( {right: "0px"}, "400");
    }

    function picturesAnimate(id) {
        console.log(id);      
        id.children().animate( {top: "0px"}, "200");
}
});

