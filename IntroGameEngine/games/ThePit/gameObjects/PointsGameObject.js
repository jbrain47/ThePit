class PointsGameObject extends GameObject{
    constructor(){
        super("PointsGameObject")
        this.addComponent(new TextLabel(), {text:"90 seconds", font: "20px Times"})
        this.addComponent(new PointsController())
    }
}