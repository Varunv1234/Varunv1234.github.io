function person() {
	this.y = height/3
	this.x = width/2

	this.show  function() {
		fill(255);
		ellipse(this.x, this.y, 16, 26);
		line(this.x + 10, this.y, this.x+25, this.y);
		line(this.x + 10, this.y, this.x, this.y - 10);
		line(this.x + 10, this.y, this.x, this.y + 10);
	}
}