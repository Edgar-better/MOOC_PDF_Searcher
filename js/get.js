var script = document.getElementsByTagName('script');
var reg = /isSlideShow\(\"\/repositry\/resource\/.*pdf\"\)/;

function getAddress() {
    for (var i = 0; i < script.length; i++) {
        if (script[i].getAttribute('type') == 'text/javascript' && reg.test(script[i].innerHTML)) {
            let html = script[i].innerHTML;
            let reg2 = /isSlideShow\("(.*)"\)/;
            console.log(reg2.exec(html));
            address = "https://cnmooc.org" + reg2.exec(html)[1];
            return address;
        }
    }
}







function set(flag, address,pdf_name) {
  
    if (flag){
        let download = document.getElementById('download-link')
        download.download = pdf_name;
        return;
    }

    else{
    var a = document.createElement('a');
        a.download = pdf_name;
        a.href = address;
        a.text = 'download';
        a.className = 'ln-item ln-learn';
        a.target = '_blank';
        a.id = 'download-link';
        a.style = 'background-color:#7952b3;color:white;font-size:17px;font-weight:bold;border-radius:3px;';

        var view_left = document.getElementsByClassName("learn-nav");
        view_left[0].insertBefore(a, view_left[0].firstElementChild)
    }

    }



window.addEventListener('click', function () {
    let reader = document.getElementById('toolbar_reader_wrapper');

    if (reader) {
        reader.addEventListener('click', function () {
            let name = document.getElementsByClassName('tab-active');
            pdf = name[0].title;
            let reg = /\d*\.?\d*(.*?)\.pdf/
            pdf_name = reg.exec(pdf)

            flag = document.getElementById('download-link');
            address = getAddress();
            if (address) {
                set(flag, address,pdf_name[1]);
            }
        });
    }
})
