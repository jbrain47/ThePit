class DisruptorGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"])
        this.addComponent(new Polygon(), {fillStyle: "orange", points:Assets.square})
        this.addComponent(new DisruptorController())
        this.addComponent(new Health(), {health:2})
    }
}