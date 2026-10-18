class SpawnController extends Component{
	disruptorCooldown = 8;
	zombieCooldown = 4;

	//add in different intervals for levels based on a level global
	disruptorInterval = 8;
	zombieInterval = 4;

	update(){
		if(Globals.phaseTime <= 0) return;

		this.disruptorCooldown -= Time.deltaTime;
		this.zombieCooldown -= Time.deltaTime;

		if(this.disruptorCooldown <= 0){
			this.spawnDisruptor();
			this.disruptorCooldown = this.disruptorInterval;
		}

		if(this.zombieCooldown <= 0){
			this.spawnZombie();
			this.zombieCooldown = this.zombieInterval;
		}

	}

	spawnDisruptor(){
		let disruptor = new DisruptorGameObject();
		let cam = SceneManager.currentScene.camera;

		disruptor.transform.position.x = Camera.main.gameObject.transform.position.x + 100;
		disruptor.transform.position.y = Camera.main.gameObject.transform.position.y + 275;

		SceneManager.currentScene.instantiate(disruptor);
	}

	spawnZombie(){
		let zombie = new EnemyGameObject();
		zombie.transform.position.x = 300;
		zombie.transform.position.y = 500;
		SceneManager.currentScene.instantiate(zombie);
	}
}
