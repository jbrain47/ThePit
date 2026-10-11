class LaserController extends Component {

    speed = 200
    laserDirection = "right"

    update() {
        if (this.laserDirection === "right"){
            this.transform.position.x += Time.deltaTime * this.speed
        }
        if (this.laserDirection === "left"){
            this.transform.position.x -= Time.deltaTime * this.speed
        }

        if (this.transform.position.x > 500 || this.transform.position.x < 0) {
            this.gameObject.destroy()
        }

        //Collision Check
       
        let myPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")
        for (const enemyGameObject of enemyGameObjects) {
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude
            if (distance < 20) {
                this.gameObject.destroy()
                // enemyGameObject.destroy()
                let healthComponent = enemyGameObject.getComponent(Health)
                healthComponent.health--
                Globals.points++
            }
        }

    }
}