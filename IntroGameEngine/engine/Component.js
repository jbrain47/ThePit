// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * Base class for all components
 * 
 * Compare to the Unity Component: https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Component.html
 * Compare to the Unreal UActorComponent: https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/UActorComponent/?application_version=5.5
 * Compare to the Godot Node: https://docs.godotengine.org/en/4.4/classes/class_node.html
 */
class Component{

    /** @type{GameObject} */
    gameObject

    didStart = false

    /**
     * @returns{Transform} The parent game object's transform
     */
    get transform(){
        return this.gameObject.transform
    }
}