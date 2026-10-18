/**
 * Class for managing scenes in the game
 * 
 * Compare to the Unity SceneManager: https://docs.unity3d.com/6000.5/Documentation/ScriptReference/SceneManagement.SceneManager.html
 * Compare to the Unreal UGameplayStatics: https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Kismet/UGameplayStatics/?application_version=5.5
 * Compare to the Godot SceneTree: https://docs.godotengine.org/en/4.4/classes/class_scenetree.html
 */
class SceneManager{
    static currentScene
    static nextScene

    static update(){
        if(SceneManager.nextScene){
            SceneManager.currentScene = new SceneManager.nextScene()
            SceneManager.nextScene = undefined
        }
    }

    static loadScene(nextScene, additive = false){
        if(!additive){
            SceneManager.nextScene = nextScene
        }
        else{
            const tempScene = new nextScene()
            for(const gameObject of tempScene.gameObjects){
                SceneManager.currentScene.gameObjects.push(gameObject)
            }
        }

    }
}