let status = false;

let responsNav = function() {
    let mobileM = document.querySelector('.mobileM');
    let mobileUl = document.querySelector('.mobileUl');
    let mobileA = document.querySelectorAll('.mobileLi a');
    
    if(status === false) {
        mobileM.style.height = "100vh";
        mobileUl.style.display = "block";
        mobileUl.style.visibility = "visible";
        let MobileLinks = mobileA.length;
        for(let i=0;i<MobileLinks;i++) {
            mobileA[i].style.opacity = '1';
        }
        status = true;
    }else if(status === true) {
        mobileM.style.height="0.1px";
        mobileUl.style.visibility="hidden";
        let MobileLinks = mobileA.length;
        for(let i=0;i<MobileLinks;i++) {
            mobileA[i].style.opacity = '0';
        }
        status = false;
    }

    function closeMenu(e) {
        mobileM.style.height="0.1px";
        mobileUl.style.visibility="hidden"

        let MobileLinks = mobileA.length;
        for(let i=0; i < MobileLinks; i++) {
            mobileUl[i].style.opacity = '0';
        }

        status = false;

    }

    mobileA.forEach(item=>item.addEventListener('click',closeMenu));
}