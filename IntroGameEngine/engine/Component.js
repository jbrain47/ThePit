// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * Base class for all components
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