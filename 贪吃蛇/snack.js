//小蛇的自调用函数
		(function (){
			//存放小蛇的身体部分
			var elements = [];
			//小蛇的构造函数
			function Snack(width,height,direction){
				//蛇的宽高，蛇的组成部分
				this.width = width || 20;
				this.height = height || 20;
				//小蛇的身体,默认是三个小方块组成的
				this.body = [
				{x:3, y:2, color:"red"},
				{x:2, y:2, color:"orange"},
				{x:1, y:2, color:"orange"}
				];
				//方向
				this.direction = direction || "right";
			}

			//小蛇的初始化，为原型添加方法
			Snack.prototype.init = function(map){
				 //先删除之前的小蛇
			      remove();//===========================================
			      //循环遍历创建div
			      for (var i = 0; i < this.body.length; i++) {
			        //数组中的每个数组元素都是一个对象
			        var obj = this.body[i];
			        //创建div
			        var div = document.createElement("div");
			        //把div加入到map地图中
			        map.appendChild(div);
			        //设置div的样式
			        div.style.position = "absolute";
			        div.style.width = this.width + "px";
			        div.style.height = this.height + "px";
			        //横纵坐标,通过对象.的方式访问
			        div.style.left = obj.x * this.width + "px";
			        div.style.top = obj.y * this.height + "px";
			        //背景颜色
			        div.style.backgroundColor = obj.color;
			        //方向暂时不定
			        //把div加入到elements数组中----目的是为了删除
			        elements.push(div);
			      }
			    };
			//让小蛇移动，为原型添加方法
			Snack.prototype.move = function(food,map){
			//改变小蛇身体的坐标
			var i = this.body.length - 1;
			for( ;i > 0;i--){
				//把前一个body的坐标给后一个body的坐标，实现移动
				this.body[i].x = this.body[i - 1].x;
				this.body[i].y = this.body[i - 1].y;
			}

			//判断蛇头的方向，改变蛇头的坐标
			switch(this.direction){
				case "right": 
					this.body[0].x += 1;
					break;
				case "left":
					this.body[0].x -= 1;
					break;
				case "top": 
					this.body[0].y -= 1;
					break;
				case "bottom": 
					this.body[0].y += 1;
					break;
			};

			//判断小蛇有没有吃到食物
			var headX = this.body[0].x * this.width;
			var headY = this.body[0].y * this.height;
			var foodX = food.x;
			var foodY = food.y;
			if(headX == foodX && headY == foodY){
				//将小蛇的尾部复制一份
				var last = this.body[this.body.length - 1];
				//在尾部加上一节
				this.body.push(
				{
					x: last.x, 
					y: last.y, 
					color :last.color
				});
				//删除事物并且重新初始化事物
				food.init(map);

			}
		};	
			//删除小蛇的私有函数
			function remove(){
				var i = elements.length - 1;
				for( ;i >= 0;i--){
					//从当前的父级元素中找到这个子元素，然后再map中删除
					var ele = elements[i];
					ele.parentNode.removeChild(ele);
					//删除元素
					elements.splice(i,1);
				}
			}

			//暴露构造函数给外部
			window.Snack = Snack;
		}());