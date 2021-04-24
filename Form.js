class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.reset = createButton('Reset');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    show(){
        this.reset.position(800,150);
        this.reset.show();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(610,200);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(800,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(800,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(800,600);
        this.reset.style('width', '200px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'lightpink');
        this.reset.hide();

        this.button.mousePressed(() => {
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(650,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            this.button.show();
            this.input.show();
            this.title.show();
            this.reset.hide();
        });

    }
}