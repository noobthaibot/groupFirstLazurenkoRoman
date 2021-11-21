$(document).ready(function () {
    // utils.js --------------

    function getGameTime(date) {
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
    }

    // ----------------------

    const GAME_STEP_DELAY = 2;

    const objects = [];

    function Ball(options) {
        this.id = Math.trunc(1000 * Math.random());
        this.color = options.color;
        this.size = options.size;
        this.height = this.size * 8;
        this.width = this.size * 8;

        this.x = 300;
        this.y = 300;

        this.directionX = 1;
        this.directionY = 1;

        this._createView = function () {
            let result = document.createElement("div");
            result.innerText = this.id;
            result.style.cssText = `
			display: inline-block;
			position: absolute;
			background: ${this.color};
			border: 1px solid black;
			border-radius: 50%;
			height: ${this.height}px;
			width: ${this.width}px;
			margin: 0;
			text-align:center;`;

            document.body.append(result);

            return result;
        };

        this._div = this._createView();

        this.live = function () {
            this.renderState();
            this.renderView();
        };

        this.renderState = function () {
            this.x = this.x + this.directionX;
            this.y = this.y + this.directionY;
        };

        this.renderView = function () {
            this._div.style.left = `${this.x}px`;
            this._div.style.top = `${this.y}px`;
        };
    }

    function Wall(options) {
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;

        this._createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
			display: inline-block;
			position: absolute;
			left: ${this.x}px;
			top: ${this.y}px;
			width: ${this.width}px;
			height: ${this.height}px;
			background: black;
			`;

            document.body.append(result);
            return result;
        };

        this._div = this._createView();

        this.live = function () {
            this.renderState();
            this.renderView();
        };

        this.renderState = function () {};

        this.renderView = function () {};
    }

    function Racket(options) {
        this.x = options.x;
        this.y = options.y;
        this.width = Math.min(options.width, 100);
        this.width = Math.max(this.width, 10);
        this.height = Math.min(options.height, 100);
        this.height = Math.max(this.height, 10);

        this._createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
			display: inline-block;
			position: absolute;
			left: ${this.x};
			top: ${this.y};
			width: ${this.width}px;
			height: ${this.height}px;
			background: red;
			`;

            document.body.append(result);
            return result;
        };

        this._div = this._createView();

        this.live = function () {
            this.renderState();
            this.renderView();
        };

        this.renderState = function () {};

        this.renderView = function () {
            this._div.style.left = `${this.x}px`;
            this._div.style.top = `${this.y}px`;
        };

        this.onMouseMove = function (event) {
            this.x = event.x;
        };
    }
    function Brick() {
        const div = document.createElement("div");

        this._div = div;

        this.getDiv = function () {
            return this._div;
        };

        this.x = 0;
        this.y = 0;
        this.width = 65;
        this.height = 20;

        div.style.cssText = `
			display: inline-block;
			background: purple;
			height: 20px;
			width: 80px;
			margin: 5px;`;

        this.renderState = function () {
            const rect = this.getDiv().getBoundingClientRect();

            this.x = rect.x;
            this.y = rect.y;
        };

        this.setPosition = function () {
            Object.assign(this.getDiv().style, {
                left: `${this.x}px`,
                top: `${this.y}px`,
            });
        };

        this.makeAbsolute = function () {
            Object.assign(this.getDiv().style, {
                position: "absolute",
            });
        };

        this.live = function () {};

        this.remove = function () {
            this._div.remove();
        };
    }

    for (let i = 0; i < 50; i++) {
        const brick = new Brick();
        let bricksWrapper = document.querySelector(".bricks-wrapper");
        bricksWrapper.append(brick.getDiv());

        objects.push(brick);
    }

    objects.forEach((item) => {
        if (item instanceof Brick) {
            item.renderState();
            item.setPosition();
        }
    });

    objects.forEach((item) => {
        item instanceof Brick && item.makeAbsolute();
    });

    objects.push(
        new Ball({
            color: "khaki",
            size: 3,
        })
    );

    objects.push(
        new Wall({
            x: 0,
            y: 0,
            width: 10,
            height: document.documentElement.clientHeight,
        })
    );

    objects.push(
        new Wall({
            x: document.documentElement.clientWidth - 10,
            y: 0,
            width: 10,
            height: document.documentElement.clientHeight,
        })
    );

    objects.push(
        new Wall({
            x: 0,
            y: 0,
            width: document.documentElement.clientWidth,
            height: 10,
        })
    );

    let r = new Racket({
        y: document.documentElement.clientHeight - 20,
        width: 100,
        height: 20,
    });
    objects.push(r);
    document.addEventListener("mousemove", r.onMouseMove.bind(r));

    function checkCollision(objectA, objectB) {
        if (objectA !== objectB) {
            let ball = null;
            let wall = null;
            let racket = null;
            let brick = null;
            if (objectA instanceof Ball) {
                ball = objectA;
            } else if (objectA instanceof Wall) {
                wall = objectA;
            }

            if (objectB instanceof Ball) {
                ball = objectB;
            } else if (objectB instanceof Wall) {
                wall = objectB;
            }

            if (objectA instanceof Racket) {
                racket = objectA;
            } else if (objectB instanceof Racket) {
                racket = objectB;
            }

            if (objectA instanceof Brick) {
                brick = objectA;
            } else if (objectB instanceof Brick) {
                brick = objectB;
            }

            if (ball && wall) {
                if (
                    (ball.x === wall.x || ball.x + ball.width === wall.x) &&
                    ball.y > wall.y &&
                    ball.y < wall.height
                ) {
                    ball.directionX = ball.directionX * -1;
                }

                if (ball.y === wall.y) {
                    ball.directionY = ball.directionY * -1;
                }
            }

            if (ball && racket) {
                if (
                    ball.x > racket.x &&
                    ball.x < racket.x + racket.width &&
                    ball.y + ball.height === racket.y
                ) {
                    ball.directionY = ball.directionY * -1;
                }
            }

            if (ball && brick) {
                const ballMiddle = ball.width / 2 + ball.x;

                const brickMarginRight = parseInt(
                    brick.getDiv().style.marginRight
                );
                const brickMarginLeft = parseInt(
                    brick.getDiv().style.marginLeft
                );

                const touchInMainWidth =
                    ballMiddle > brick.x && ballMiddle < brick.x + brick.width;

                const touchWothMargin =
                    ballMiddle > brick.x + brickMarginLeft &&
                    ballMiddle < brick.x + brick.width + brickMarginRight;

                if (
                    (touchInMainWidth || touchWothMargin) &&
                    ball.y === brick.y + brick.height + 2
                ) {
                    ball.directionY = ball.directionY * -1;

                    brick.remove();
                }
            }
        }
    }

    function isGameOver(ball, racket) {
        return ball.y > racket.y;
    }

    function doGameStep() {
        let gameOver = false;

        let currentGameTime = getGameTime(new Date());
        // console.log(currentGameTime, currentGameStep, 'doGameStep', objects);

        for (let i = 0; i < objects.length; i++) {
            objects[i].live();
        }

        for (let i = 0; i < objects.length; i++) {
            let objectA = objects[i];
            for (let j = i + 1; j < objects.length; j++) {
                let objectB = objects[j];
                checkCollision(objectA, objectB);
            }
        }

        let ball = objects.find((item) => item instanceof Ball);
        let racket = objects.find((item) => item instanceof Racket);
        gameOver = isGameOver(ball, racket);

        currentGameStep++;
        if (currentGameStep < 1000000 && !gameOver) {
            setTimeout(doGameStep, GAME_STEP_DELAY);
        } else {
            alert("Game over");
        }
    }

    let currentGameStep = 0;
    setTimeout(doGameStep, GAME_STEP_DELAY);
});
