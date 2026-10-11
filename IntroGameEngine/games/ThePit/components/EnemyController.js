class EnemyController extends Component{
    direction = 1
    groundLevel = 375
    onGround = false
    isDead = false
    speed = 50

    update(){

        //FALLING
        if (!this.onGround){
            if (this.transform.position.y < this.groundLevel) {
                this.transform.position.y += Time.deltaTime * 100 * this.direction
            }
            else{
                this.onGround = true
            }
        }

        //MILLINGABOUT
        if (this.onGround && !this.isDead){
            this.transform.position.x += Time.deltaTime * this.speed * this.direction

            if (this.transform.position.x > 450){
                this.direction = -1
            }

            if (this.transform.position.x < 150){
                this.direction = 1
            }
        }

        //DEATH
        if(this.gameObject.getComponent(Health).health <= 0){
            let poly = this.gameObject.getComponent(Polygon)
            poly.fillStyle = "blue"
            this.isDead = true
        }
    }

}