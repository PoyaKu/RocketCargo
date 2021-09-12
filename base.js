
class Base {
	constructor(name, x, y) {
		this.name = name;
		this.colorNormal = "rgb(100,50,50,0.3)";
		this.colorActive = "rgb(100,50,50,0.6)";
		this.color = this.colorNormal
		this.x = x;
		this.y = y;
		this.vx = 0;
		this.vy = 0;
		this.radius = 50;
		this.type = (y == groundPoint? Base.TYPE.GROUND:Base.TYPE.SPACE) ; 
	}

	step(dt) {



	}

	draw() {

		ctx.save();
		ctx.translate(this.x,this.y);

		ctx.strokeStyle = this.color;
		ctx.fillStyle = this.color;

		if (this.type == Base.TYPE.GROUND) {
			ctx.beginPath();
			ctx.ellipse(0, 0+30, this.radius, this.radius*0.2, 0, 0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
	
			ctx.beginPath();
			ctx.ellipse(0, 0+26, this.radius/2, this.radius/2*0.2, 0, 0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
		} else if (this.type == Base.TYPE.SPACE){
			ctx.beginPath();
			ctx.fillRect(0, 0+26, this.radius*2, this.radius/2);
			ctx.stroke();
		}

        ctx.font = "bold 60px Verdana";
        ctx.textAlign = "left";
        ctx.fillStyle = "#000000";
		let size = ctx.measureText(this.name);
        ctx.fillText(this.name, 0 - size.width/2, 0+100);

        // ctx.beginPath(),
        // ctx.arc(0,0,this.radius,0,Math.PI*2);
        // ctx.stroke();
        // ctx.closePath();

		ctx.restore();
	}


	

	

    inSafeDistance(otherDot) {
		var dist = this.distance(otherDot);
		var minDist = this.SafeDistance + otherDot.radius;
	if (dist < minDist) {
		return true;
	}
	return false;
	}


    distance(position) {
		var dx = position.x - this.x,
			dy = position.y - this.y,
			dist = Math.sqrt(dx * dx + dy * dy);
		return dist;
	}	
}

Base.TYPE = {GROUND:"GROUND",SPACE:"SPACE"};