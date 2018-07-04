//游戏对象的自调用函数
		(function(){
			//that 变量用来存放this指针
			var that = null;
			//游戏的构造函数
			function Game(map){
				//创建food和snack的实例对象
				this.food = new Food();
				this.snack = new Snack();
				this.map = map;
				//保存当前的实例对象到that中
				that = this;
			}
			//游戏初始化，原型方法
			Game.prototype.init = function(){
				this.food.init(this.map);
				this.snack.init(this.map);
				this.running(this.food,this.map);
				this.bindKey();
			};
			//添加小蛇自动移动的原型方法
			Game.prototype.running = function(food,map){
				var timeId = setInterval(function(){
						this.snack.move(food,map);
						this.snack.init(map);
						//获取横坐标最大值
						var maxX = map.offsetWidth / this.snack.width;
						//获取纵坐标的最大值
						var maxY = map.offsetHeight / this.snack.height;
						//获取小蛇的头部的横坐标
						var headX = this.snack.body[0].x;
						//获取小蛇的头部的纵坐标
						var headY = this.snack.body[0].y;
						//判断横坐标移动
						if(headX < 0 || headX >= maxX){
							clearInterval(timeId);
							alert("游戏结束");
						}
						if(headY < 0 || headY >= maxY){
							clearInterval(timeId);
							alert("游戏结束");
						}
				}.bind(that),150);
				
			};
			//添加按下键盘的原型方法
			Game.prototype.bindKey = function(){
				//获取键盘按下事件
				document.addEventListener("keydown",function(e){ 
					//获取键盘按下的键
					switch(e.keyCode){
						case 37: this.snack.direction = "left";break;
						case 38: this.snack.direction = "top";break; 
						case 39: this.snack.direction = "right";break; 
						case 40: this.snack.direction = "bottom";break;

					}
				}.bind(that),false)
			};
			window.Game = Game;
		}());

		//调用自调用函数
		var gm = new Game(document.querySelector(".map"));
		gm.init();