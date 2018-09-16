/*
obj       可选参数 
method    请求方式 （支持大小写）
url       请求地址
data      请求体    {}
callback  回调函数
 */

let ajax = (obj) => {
    const method = obj.method.toUpperCase();
    let url = obj.url;
    let data = obj.data;
    const callback = obj.callback;
    const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    const tempArr = [];
    for (key in data) {
        let value = data[key];
        tempArr.push(`${key}=${value}`);
    }
    let params = tempArr.join('&');
    if (method == 'GET') {
        url = `${url}?${params}`;
    }
    xhr.open(method, url, true);
    data = null;
    if (method == 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        data = params;
    }
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
}
