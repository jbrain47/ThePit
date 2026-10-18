class PointsController extends Component{
    update(){
        Globals.phaseTime -= Time.deltaTime

        let seconds = Math.floor(Globals.phaseTime)

        this.gameObject.getComponent(TextLabel).text = seconds + " seconds"
    }
}