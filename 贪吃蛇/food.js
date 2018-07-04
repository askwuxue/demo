//食物的自调用函数
		(function (){
			//创建空数组保存食物的元素
			var Elements = [];
			//食物的构造函数
			function Food(x,y,width,height,color){
				//横纵坐标
				this.x = x || 0;
				this.y = y || 0;
				//宽和高
				this.width = width || 20;
				this.height = height || 20;
				this.color = color || "green";
			}
			//初始化食物的方法，利用原型实现共享
			Food.prototype.init = function(map){
				//每次初始化先调用删除一个食物
				remove();
				//创建事物的div
				var div = document.createElement("div");
				//把食物添加到地图中
				map.appendChild(div);
				//把食物元素放在数组中
				Elements.push(div);
				//设置食物的样式
				div.style.width = this.width + "px";
				div.style.height = this.height + "px";
				div.style.backgroundColor = this.color;
				div.style.position = "absolute";
				//设置随机食物的横纵坐标
				this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
				this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
				div.style.left = this.x + "px";
				div.style.top = this.y + "px";
			};
			//删除食物的方法,私有函数
			function remove(){
				for(var i = 0;i < Elements.length;i++){
					//利用食物的父级节点然后通过父级节点删除子元素
					console.log(Elements[i]);
					Elements[i].parentNode.removeChild(Elements[i]);
					//从数组中删除元素
					Elements.splice(0,1);
				}
			}
			//将Food暴露给外部，使其可以被调用
			window.Food = Food;	
		}());