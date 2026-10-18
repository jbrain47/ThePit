// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * The scene base class
 * 
 * Compare to the Unity Scene: https://docs.unity3d.com/6000.5/Documentation/ScriptReference/SceneManagement.Scene.html
 * Compare to the Unreal ULevel: https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Engine/ULevel/?application_version=5.5
 * Compare to the Godot Node: https://docs.godotengine.org/en/4.4/classes/class_node.html
 */
class Scene {
    /** @type{GameObject[]} The game objects in the scene*/
    gameObjects = []

    constructor(backgroundColor) {
        let cameraGameObject = new GameObject("MainCamera", ["MainCamera"])
        cameraGameObject.addComponent(new Camera())
        this.instantiate(cameraGameObject)
        if(backgroundColor){
            cameraGameObject.getComponent(Camera).backgroundColor = backgroundColor
        }
    }

    /**
     * Create a new game object in this scene
     * @param {GameObject} gameObject The game object to add
     * @param {Vector2} position The position of the game object
     * @param {Number} rotation The rotation of the game object
     */
    instantiate(gameObject, position = new Vector2(0, 0), rotation = 0) {
        this.gameObjects.push(gameObject)
        gameObject.transform.position = position
        gameObject.transform.rotation = rotation
        return gameObject
    }

    /**
     * Start the scene
     */
    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.start()
        }
    }

    /**
     * Update the scene
     */
    update() {
        for (const gameObject of this.gameObjects) {
            gameObject.update()
        }

        let temp = []
        for (const gameObject of this.gameObjects) {
            if (!gameObject.markForDestroy)
                temp.push(gameObject)
        }
        this.gameObjects = temp
    }

    /**
     * Draw the scene
     * @param {CanvasRenderingContext2D} ctx The context we are drawing to
     */
    draw(ctx) {
        ctx.fillStyle = Camera.main.backgroundColor
        ctx.fillRect(0, 0, Engine.canvas.width, Engine.canvas.height)

        //Start Camera code
        ctx.save()
        ctx.translate(Engine.canvas.width / 2, Engine.canvas.height / 2)
        ctx.translate(-Camera.main.transform.position.x, -Camera.main.transform.position.y)

        for (const layer of Engine.layers.filter(l=>l!="UI")) {
            for (const gameObject of this.gameObjects.filter(go => go.layer == layer)) {
                gameObject.draw(ctx)
            }
        }


        ctx.restore()
        //Stop camera code

        //UI Layer
        for (const gameObject of this.gameObjects.filter(go => go.layer == "UI")) {
            gameObject.draw(ctx)
        }
    }
}

/**
 * Instantiate a game object in the current scene
 * @param {GameObject} gameObject The game object to create
 * @param {Vector2} position The position of the game object
 * @param {Number} rotation The rotation of the game object
 */
function instantiate(gameObject, position = new Vector2(0, 0), rotation = 0) {
    return SceneManager.currentScene.instantiate(gameObject, position, rotation)
}