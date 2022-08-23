const iphone = document.querySelector('.iphone');
const bezZvuk = document.querySelector('.iphone .bezZvuk');
const zvukPlus = document.querySelector('.iphone .zvukPlus');
const zvukMinus = document.querySelector('.iphone .zvukMinus');
const onOff = document.querySelector('.iphone .onOff');
const display = document.querySelector('.iphone .display');
const volume = document.querySelector('.iphone .display .volume');
const volumeSpan = document.querySelectorAll('.iphone .display .volume .spans span');
const flashLight = document.querySelector('.iphone .display .bottomPanel .header .light');
const flashLightIcon = document.querySelector('.iphone .display .bottomPanel .header .light img');
const displayBattery = document.querySelector('.iphone .display .battery .displayBattery');
const batterySumConst = document.querySelector('.iphone .display .battery .sum');
const volumeItem = document.querySelectorAll('.iphone .display .volume .item');
const volumeIcon = document.querySelector('.iphone .display .volume .volumeIcon');
const timeTop = document.querySelector('.iphone .display .timeTop');
const displayTimePanel = document.querySelector('.iphone .display .displayTime');
const displayTime = document.querySelector('.iphone .display .displayTime .time');
const displayData = document.querySelector('.iphone .display .displayTime .data');
const buttonBlockSwipe = document.querySelector('.iphone .display .bottomPanel .swipe');
const buttomPanelHeader = document.querySelector('.iphone .display .bottomPanel .header');
const phoneMenu = document.querySelector('.iphone .display .phoneMenu');
const phoneMenuBottom = document.querySelector('.iphone .display .phoneMenuBottom');
const buttonBottom = document.querySelector('.iphone .display .bottomPanel .swipe .button');
const cameraButton = document.querySelector('.iphone .display .bottomPanel .header .camera');
const cameraMenu = document.querySelector('.iphone .display .camera-menu');
const swipeToOpen = document.querySelector('.iphone .display .bottomPanel .swipe span');

let zvuk = 0;
let onOffBool = false;
let flashBool = false;
let batterySum = 100;
let colorBattery = '#fff';
let timeVol;
let mouseY;
let touchBool = false;
let displayUnlock = false;
onOff.onclick = () => {
    onOffBool = !onOffBool;
    if (onOffBool) {
        display.style.opacity = 1;
        display.style.pointerEvents = 'auto';
////////////////////////////////////////////////////
    cameraButton.onclick = () => {
        cameraMenu.style = 'left: 0';
        buttomPanelHeader.style = 'transform: translateX(-100%);';
        setTimeout(() => buttomPanelHeader.style = 'transform: translateX(-100%);', 1000);
        swipeToOpen.style.display = 'none';
    }
        zvukPlus.onmousedown = () => {
            clearTimeout(timeVol);
            volume.style.display = 'block';
            if (zvuk < 7) {
                zvuk++;
                for (let i = 0; i < volumeSpan.length; i++) {
                    volumeSpan[i].style.width = zvuk + 'px';
                }
                console.log(zvuk);
            }
            if (zvuk > 0) {
                for (let i = 0; i < volumeItem.length; i++) {
                    volumeItem[i].style.opacity = 1;
                }
                volumeIcon.style.background = '#000';
            } 
        }
        zvukPlus.onmouseup = () => timeVol = setTimeout(() => volume.style.display = 'none', 2000);
        
        zvukMinus.onmousedown = () => {
            clearTimeout(timeVol);
            volume.style.display = 'block';
            if (zvuk > 0) {
                zvuk--;
                for (let i = 0; i < volumeSpan.length; i++) {
                    volumeSpan[i].style.width = zvuk + 'px';
                }
                console.log(zvuk);
            }
            for (let i = 0; i < volumeItem.length; i++) {
                if (zvuk != 0) {
                    volumeItem[i].style.opacity = 1;
                    volumeItem[i].style.opacity = 1;
                    volumeItem[i].style.opacity = 1;
                    volumeIcon.style.background = '#000';
                } else if (zvuk == 0) {
                    volumeItem[i].style.opacity = 0;
                    volumeItem[i].style.opacity = 0;
                    volumeItem[i].style.opacity = 0;
                    volumeIcon.style.background = 'red';
                }
            }
        }
        zvukMinus.onmouseup = () => timeVol = setTimeout(() => volume.style.display = 'none', 2000);

        bezZvuk.onmousedown = () => {
            clearTimeout(timeVol)
            volume.style.display = 'block';
            zvuk = 0;
            for (let i = 0; i < volumeSpan.length; i++) {
                volumeSpan[i].style.width = zvuk + 'px';
            }
            for (let i = 0; i < volumeItem.length; i++) {
                volumeItem[i].style.opacity = 0;
            }
            volumeIcon.style.background = 'red';
        }
        bezZvuk.onmouseup = () => timeVol = setTimeout(() => volume.style.display = 'none', 2000);

        setInterval(() => {
           batterySum == 30 ? colorBattery = 'orange' : '';
           batterySum == 15 ? colorBattery = 'red' : '';
            if (batterySum > 0) {
                batterySum--;
                displayBattery.style.background = `linear-gradient(to right, ${colorBattery} ${batterySum}%, transparent ${batterySum}%)`;
                batterySumConst.innerText = batterySum + '%';
            } else if (batterySum == 0) {
                display.style.opacity = 0;
                display.style.pointerEvents = 'none';
                volume.style.display = 'none';
            }
        }, 5000);

        flashLight.onclick = () => {
            flashBool = !flashBool;
            if (flashBool) {
                flashLightIcon.src = 'img/flashlight_acitve.png';
                flashLight.style.background = 'rgba(255, 255, 255, 1)';
                iphone.style.boxShadow = '0 -400px 500px 100px rgba(255,255,255, 0.8)';
            } else {
                flashLightIcon.src = 'img/flashlight.png';
                flashLight.style.background = 'rgba(0, 0, 0, 0.4)';
                iphone.style.boxShadow = 'none';
            }
        }
////////////////////////////////////////////////////
    } else {
        display.style.opacity = 0;
        display.style.pointerEvents = 'none';
        volume.style.display = 'none';
        displayTimePanel.style.top = '130px';
        buttomPanelHeader.style = 'margin-top: 0px; transform: none;';
        phoneMenu.style = 'display: none; top: -350px';
        phoneMenuBottom.style.bottom = '-100%';
        buttonBottom.style.bottom = '10px';
        touchBool = false;
        cameraMenu.style.left = '105%';
        swipeToOpen.style.display = 'block';
    }
};

buttonBlockSwipe.onmousedown = e => {
    touchBool = true;
    mouseY = e.y;
};

buttonBlockSwipe.onmouseup = () => touchBool = false;
buttonBlockSwipe.onmousemove = e => {
    if (touchBool) {
        if (e.y < (mouseY - 10)) {
            displayTimePanel.style.top = '-100%';
            buttomPanelHeader.style.marginTop = '-600px';
            phoneMenu.style = 'display: flex; top: 60px';
            phoneMenuBottom.style.bottom = '25px';
            buttonBottom.style.bottom = '20px';
            cameraMenu.style = 'left: 105%';
            setTimeout(() => buttonBottom.style.bottom = '10px', 300);
        }
    }
};

let amisner = ['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս', 'Օգոստոս',
 'Սեպտեմբեր', 'Հոկտեմբեր', 'Նոյեմբեր', 'Դեկտեմբեր'];
let shabatvaOr = ['Կիրակի', 'Երկուշաբթի', 'Երեքշաբթի', 'Չորեքշաբթի', 'Հինգշաբթի', 'Ուրբաթ', 'Շաբաթ'];
let setDate = setInterval(() => {
    let date = new Date();
    let shabatOrDisplay;
    let amis;
    let jam;
    let rope;
    amis = amisner[date.getMonth()];
    shabatOrDisplay = shabatvaOr[date.getDay()];
    date.getMinutes() < 10 ? rope = '0' + date.getMinutes() : rope = date.getMinutes();
    date.getHours() < 10 ? jam = '0' + date.getHours() : jam = date.getHours();
    timeTop.innerText = jam + ':' + rope;
    displayTime.innerText = jam + ':' + rope;
    displayData.innerText = shabatOrDisplay + ', ' + amis + ' ' + date.getDate();
}, 1000);















































