class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(50, 300))
        this.instantiate(new PointsGameObject(), new Vector2(0, 20))
        this.instantiate(new DungeonGameObject(), new Vector2(0, 400))

    }
}