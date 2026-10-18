// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * Class used for tracking time
 * 
 * Compare to the Unity Time: https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Time.html
 * Compare to the Unreal FApp: https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Core/Misc/FApp/?application_version=5.5
 * Compare to the Godot Time: https://docs.godotengine.org/en/4.4/classes/class_time.html
 */
class Time{
    /**
     * @type{Number} The time in seconds since the last frame
     */
    static deltaTime = 1/60

    /**
     * @type{Number} The elapsed time in the game
     */
    static time = 0

    /**
     * Update the Time class
     */
    static update(){
        Time.time += Time.deltaTime
    }
}