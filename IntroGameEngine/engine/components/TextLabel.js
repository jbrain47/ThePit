// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * Class for drawing text on the screen
 * 
 * Compare to the Unity UI.Text: https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/script-Text.html
 * Compare to the Unreal UTextRenderComponent: https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/UTextRenderComponent/?application_version=5.5
 * Compare to the Godot Label: https://docs.godotengine.org/en/4.4/classes/class_label.html
 */
class TextLabel extends Component{
    /** @type{string} The fill color of the text */
    fillStyle = "black"

    /** @type{string} The string to display */
    text  = "[BLANK]"

    font = "10px Arial"

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx The drawing context
     */
    draw(ctx) {
        //Since we have an engine now, the canvas should already be
        //the right size and cleared


        //Signaling to the context that I'm going to draw something
        ctx.save()

        //Set center of our object
        // ctx.translate(this.transform.position.x, this.transform.position.y)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)
        // ctx.rotate(this.transform.rotation)

        

        //Set the color of the fill
        ctx.fillStyle = this.fillStyle

        ctx.font = this.font
        //Tell the canvas to draw the object
        ctx.fillText(this.text, 0, 0)

        //Signaling that I'm done drawing
        ctx.restore()
    }
}