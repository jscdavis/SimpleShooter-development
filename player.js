function create_player(ship) {
	ship = game.add.sprite(50, 50, 'ship');
	ship.anchor.setTo(0.5, 0.5); 
}

function kill_ship() {
	ship.kill();
}