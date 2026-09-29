class MainGameObject extends GameObject{
    constructor(){
        super("Main")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"green", points:Assets.triangle})
    }
}