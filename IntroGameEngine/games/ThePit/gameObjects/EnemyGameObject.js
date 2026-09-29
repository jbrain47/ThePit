class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"])
        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.square})
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:2})
    }
}