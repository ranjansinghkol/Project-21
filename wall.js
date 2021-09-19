class Wall {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill(255, 0, 0);
        noStroke();
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}