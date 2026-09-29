// Please carefully review the rules about academic integrity found in the academicIntegrity.md file found at the root of this project.

/**
 * Class for drawing polygons and storing their points
 */
class Polygon extends Component {
    
    /** @type{String} The fill style (background color) of the polygon*/
    fillStyle = "magenta"

    /** @type{Vector2[]} The points in the polygon*/
    points = []

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
        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.rotate(this.transform.rotation)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)

        //Move to the corners of the polygon representing our game object
        ctx.beginPath()
        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }

        //Set the color of the fill
        ctx.fillStyle = this.fillStyle
        //Tell the canvas to draw the object
        ctx.fill()

        //Signaling that I'm done drawing
        ctx.restore()
    }
}