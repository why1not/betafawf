window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        //alert("Телефон");
        let createlin = document.getElementById('abaptive');
        createlin.href = "stule_mobile_size.css";
    }
    else{
        //alert("Не телефон");
        let createlin = document.getElementById('abaptive');
        createlin.href = "stule_desc_size.css";
    }
};

