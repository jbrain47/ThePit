class DungeonGameObject extends GameObject{
    constructor(){
        super("Dungeon")

        this.addComponent(new Polygon(), {fillStyle: "gray", points:Assets.flooring})
        this.addComponent(new Polygon(), {fillStyle: "brown", points:Assets.door})
        this.addComponent(new Polygon(), {fillStyle: "gray", points:Assets.ceiling})

        this.addComponent(new SpawnController());
    }
}