class UpdateComponent extends Component {

    speed = 50
    playerDirection = "right"
    groundLevel = 375
    onGround = true

    start(){
        this.timeSinceLastLaser = 0
    }
    update() {
        this.timeSinceLastLaser += 1
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (Input.keysDown.includes("ArrowRight")){
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed
            this.playerDirection = "right"
        }

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        if (Input.keysDown.includes("ArrowLeft")){
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
            this.playerDirection = "left"
        }

        //Check to see if the up arrow key is down.
        //If it is, move our character up
        if (Input.keysDown.includes("ArrowUp") && this.onGround){
            this.transform.position.y = this.transform.position.y - Time.deltaTime * 5000
            this.onGround = false
        }

        //Check to see if the down arrow key is down.
        //If it is, move our character down
        //if (Input.keysDown.includes("ArrowDown"))
        //    this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed

        if (this.transform.position.y < this.groundLevel) {
            this.transform.position.y += Time.deltaTime * 50
        }
        else{
            this.onGround = true
        }

        if (Input.keysDown.includes("Space")) {
            if (this.timeSinceLastLaser > 15) {
                let laser = instantiate(new LaserGameObject(), this.transform.position.clone())
                laser.getComponent(LaserController).laserDirection = this.playerDirection
                this.timeSinceLastLaser = 0
            }
        }
    }
}