'use strict';
let ball = document.getElementById("ball")
let field = document.getElementById("field")
ball.style.top = (field.clientHeight/2 - ball.clientHeight/2) + "px"
ball.style.right = (field.clientWidth/2 - ball.clientWidth/2) + "px"