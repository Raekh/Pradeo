class Ajax{
    param(object){
        var encodedString = '';
        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += '&';
                }
                encodedString += encodeURI(prop + '=' + object[prop]);
            }
        }
        return encodedString;
    }
    
    get(route,args=""){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE){
                return JSON.parse(xhr.responseText);
            }
        }
        
        if(args!=""){
            route+="?"+this.param(args);
        }
        xhr.open('GET', route, true);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send();
    }
    
    post(route,args){
        return new Promise((resolve, reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState == XMLHttpRequest.DONE){
                    resolve(JSON.parse(xhr.responseText));
                } 
            }
            var params = "";
            params = this.param(args);
            
            xhr.open('POST', route, true);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(params);
        })
    }
}