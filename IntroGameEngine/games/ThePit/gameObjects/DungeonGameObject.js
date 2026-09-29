class DungeonGameObject extends GameObject{
    constructor(){
        super("Dungeon")

        this.addComponent(new Polygon(), {fillStyle: "gray", points:Assets.flooring})
    }
}