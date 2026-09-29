// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * The engine class for our games
 * 
 * This contains all the code that would be used by all games
 * The API for this class is primarily based on the Unity API
 */
class Engine {
    /**
     * @type{HTMLCanvasElement} A reference to the canvas HTML element
     */
    static canvas

    /**
     * @type{CanvasRenderingContext2D} A reference to the context we will draw to
     * 
     * Whenever we want to draw anything, we will use this variable
     */
    static ctx

    
   /**
    * 
    */
    static start(nextScene) {
        //Grab the canvas element and put it into an element named canvas
        Engine.canvas = document.querySelector("#canv")

        //We can draw to either 3D or 2D on a canvas, so we have to tell
        //the browser which one we are going to use.
        //Since this class is entirely in 2D, we grab a 2D context
        //and do all our rendering there.
        Engine.ctx = Engine.canvas.getContext("2d")

        //Tell javascript that we want to listen to keydown events
        addEventListener("keydown", Input.keydown)

        //Tell javascript that we want to listen to keyup events
        addEventListener("keyup", Input.keyup)

        SceneManager.nextScene = nextScene

        //Tell the browser to call our game loop the next time the browser can.
        requestAnimationFrame(Engine.gameLoop)
    }

    /**
    * The game loop for our game
    */
    static gameLoop() {
        SceneManager.update()

        //Update and draw
        Engine.update()
        Engine.draw()

        Time.update()

        //...then call the game loop again the next time the browser can
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        //For now, call the game-specific update code
        //update()
        SceneManager.currentScene.start()
        SceneManager.currentScene.update()
    }

    static draw() {
        //Expand the size of the canvas to match the browser window size
        //Note that this also clears the canvas for us.
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight

        //For now, call the game-specific draw code
        //Note that we pass in the context the game will draw to
        //draw(Engine.ctx)
        SceneManager.currentScene.draw(Engine.ctx)
    }

    

}