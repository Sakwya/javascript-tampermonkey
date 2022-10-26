// ==UserScript==
// @name         美化学习界面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  舒服捏
// @author       YYc
// @match        https://i.s.ecust.edu.cn/*
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.background='url(https://skuyazlu.github.io/bg.jpg) no-repeat fixed';
    document.body.style.backgroundSize='cover';
    document.getElementsByClassName('mainright rightF')[0].style='width:100% ;';
    function clean(classn){
        document.getElementsByClassName(classn)[0].style.display='none';
    }
    clean('ztop')
    clean('mainleft leftF');
    clean('foot');
    document.getElementsByClassName('main')[0].style='width:100% ';
    document.getElementById('frame_content').style='position: absolute;top:0px;';
    clean('zbrowser');
    document.getElementById('topPrompt').style='display:none';
})();