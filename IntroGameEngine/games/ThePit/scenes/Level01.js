class Level01 extends Scene{
    constructor(){
        super()
        // this.instantiate(new MainGameObject(), new Vector2(50, 300))
        this.instantiate(new EnemyGameObject(), new Vector2(425, 50), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(450, 90), Math.PI)
        this.instantiate(new DisruptorGameObject(), new Vector2(10, 375), Math.PI)
        // this.instantiate(new PointsGameObject(), new Vector2(0, 20))
        this.instantiate(new LevelControllerGameObject())
    }
}