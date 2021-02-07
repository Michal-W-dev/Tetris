<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <title>// Tetris</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <div class="board">
        <div class="leftScreen">
            <div>
                <div class="darken side-anim"></div>
                <div class="level">
                    <span>Level: </span><span> 1 </span>
                </div>

                <div class="score">
                    Your Score:<p><span>0</span> / <span>100</span></p>
                </div>
                <div class="top-score">
                    Top score:<p>0</p>
                </div>
                <div class="summon">
                    <p>Summon shape<span>0</span></p>
                </div>
                <div class="destroy">
                    <p>Destroy row<span>0</span></p>
                </div>
            </div>
        </div>

        <div class="mainScreen start-screen">
            <div class="darken anim start-anim">
                <div class="rules">
                    <p class="topic">RULES</p>

                    <p class="topic">KEYBOARD</p>
                    <p><span>LEFT / RIGHT</span> - move across the board</p>
                    <p><span>DOWN</span> - speed up (2 steps)</p>
                    <p><span>UP</span> - slow down (1 step)</p>
                    <p><span>P</span> - pause</p>
                    <p><span>F</span> - rotate</p>
                    <p><span>S</span> - summon Long Shape</p>
                    <p><span>D</span> - destroy Last Row</p>

                    <p class="topic">POINTS</p>
                    <p><span>1 row</span> - 10 pts</p>
                    <p><span>2 row</span> - 30 pts</p>
                    <p><span>3 row</span> - 60 pts, - Access: destroy row +1</p>
                    <p><span>4 row</span> - 100 pts, - Access: summon long shape +1</p>
                    <p><span>5 row</span> - 50 pts, - Game Speed reduced</p>

                    <p class="topic">SUMMON / DESTROY</p>
                    <p> - every 2 levels, you can get extra abilities (summon / destroy)</p>
                    <p> - destroying Last Row, does not give you points</p>
                    <p> - being able to summon, doesn't guarantee success of summoning</p>

                    <p class="topic">LEVEL UP</p>
                    <p> - after each level, the speed of the game will increase</p>
                    <p> - at leveling up, the game pause for short time</p>
                    <p> - in that time, you can tactically move or rotate your piece</p>

                    <p class="topic">EXTRA SQUARES</p>
                    <p> - after each level, extra squares appear on the board</p>
                    <p> - they can appear higher with higher levels</p>
                    <p> - the probability of appearing is higher with cleared board</p>
                </div>
                <div class="level hidden">
                    <span>Level: </span><span> 1 </span>
                    <div class='level-extra hidden'>
                        Access: <p> -summon Long Shape +1</p>
                    </div>
                    <div class='level-extra hidden'>
                        Access: <p> -summon Long Shape +2</p>
                    </div>
                    <div class='level-extra hidden'>
                        Access:
                        <p> -summon Long Shape +1</p>
                        <p> -destroy Last Row +1</p>
                    </div>
                </div>
            </div>
            <div class="grid"></div>
        </div>

        <div class="rightScreen">
            <div>
                <h1>TETRIS</h1>
                <div class="mini-grid"></div>
                <div class="rightScreen-results">
                    <div class="darken side-anim"></div>
                    <div class="msg">
                        <p>. . .</p>
                    </div>
                    <div class="speed">
                        Speed:<p><span>0</span> / <span>0</span></p>
                    </div>
                </div>
            </div>
            <button class="start-btn">Start</button>
        </div>

    </div>
    <div class="mobile">
        <div class="mobile-first-row">
            <button class="left-btn"><i class="fas fa-caret-left"></i></button>
            <button class="right-btn"><i class="fas fa-caret-right"></i></button>
            <div>
                <button class="up-btn"><i class="fas fa-caret-up"></i></button>
                <button class="down-btn"><i class="fas fa-caret-down"></i></button>
            </div>
            <button class="rotate-btn">F</button>
        </div>
        <div class="mobile-second-row">
            <button class="summon-btn">S</button>
            <button class="destroy-btn">D</button>
        </div>
    </div>

    <script src="index.js"></script>
</body>

</html>
