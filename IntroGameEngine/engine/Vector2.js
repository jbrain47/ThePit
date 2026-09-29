/* Please carefully review AcademicIntegrity.md found at the root of this project */

/**
 * Class that defines a 2D point
 * 
 * Compare to the Unity Vector2: https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Vector2.html
 * Compare to the Unreal Vector2D: https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/Vector2D?application_version=4.27
 * Compare to the Godot Vector2: https://docs.godotengine.org/en/4.4/classes/class_vector2.html
 */
class Vector2{
    /**
     * @type{Number} The x component of the vector
     */
    x

    /**
     * @type{Number} The y component of the vector
     */
    y

    
    /**
     * 
     * @param {Number} x The x value of the new vector
     * @param {Number} y The y value of the new vector
     * 
     * If you are coming from a python background, a constructor is similar to __init__
     */
    constructor(x, y){
        //Again, coming from a python background, you can compare
        //the this keyword to the self keyword.

        //Assign the incoming values to the new instance
        this.x = x
        this.y = y
    }

    /**
     * Add a Vector2 to this one (this function in read-only)
     * @param {Vector2} other The vector to add to this one
     * @returns A new Vector2 that is the sum of the vectors
     */
    plus(other){
        return new Vector2(this.x + other.x, this.y + other.y)
    }


    /**
     * Subtract a Vector2 from this one (this function in read-only)
     * @param {Vector2} other The vector to subtract from this one
     * @returns A new Vector2 that is the difference of the vectors
     */
    minus(other){
        return new Vector2(this.x - other.x, this.y - other.y)
    }

    /**
     * Get the magnitude (length) of the vector
     */
    get magnitude(){
        return Math.sqrt(this.x**2+this.y**2)
    }

    /**
     * Clone this Vector2
     * @returns A new Vector2 with the same x and y values as this one
     */
    clone(){
        return new Vector2(this.x, this.y)
    }
}