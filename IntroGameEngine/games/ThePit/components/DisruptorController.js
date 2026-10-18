class DisruptorController extends Component{
    direction = 1
    update(){
        //MOVEMENT
        if (this.transform.position.x >= 480){
            this.direction = -1
        }

        if (this.transform.position.x <= 10) {
            this.direction = 1
        }

        this.transform.position.x += Time.deltaTime * 100 * this.direction

        //DESTROY ZOMBIES
        let disruptorPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")

        for (const enemyGameObject of enemyGameObjects){
            let enemyController = enemyGameObject.getComponent(EnemyController)

            //Disruptor is still tagged as enemy
            if(!enemyController) continue

            if(enemyController.isDead){
                let enemyPosition = enemyGameObject.transform.position
                let distance = disruptorPosition.minus(enemyPosition).magnitude

                if(distance < 10){
                    enemyGameObject.destroy()
                    this.gameObject.destroy()
                }
            }
        }

        //DEATH
        if(this.gameObject.getComponent(Health).health <= 0){
            this.gameObject.destroy()
        }
    }
}
