// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * Class for storing the position, scale, and rotation of a game object
 * 
 * Compare to the Unity Transform: https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Transform.html
 * Compare to the Unreal USceneComponent: https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/USceneComponent/?application_version=5.5
 * Compare to the Godot Transform2D: https://docs.godotengine.org/en/4.4/classes/class_transform2d.html
 */
class Transform extends Component{
    /** @type{Vector2} The position of the transform*/
    position = new Vector2(0,0)

    /** @type{Vector2} The scale of the transform */
    scale = new Vector2(1,1)

    /** @type{Number} The rotation of the transform in radians */
    rotation = 0

    parent

    setParent(parentTransform){
        this.parent = parentTransform
    }


    getLocalMatrix(){
        let matrix = new DOMMatrix()
        matrix.translateSelf(this.position.x, this.position.y)
        matrix.rotateSelf(this.rotation * 180 / Math.PI)
        matrix.scaleSelf(this.scale.x, this.scale.y)
        return matrix
    }

    getWorldMatrix(){
        if(!this.parent) 
            return this.getLocalMatrix()
        return this.parent.getWorldMatrix().multiply(this.getLocalMatrix())
    }
}