

export function isInRole(token,role){

    if(!token) return false; 
    
    let payload = jwt(token); 
    for(let r of payload.roles){
        if(r == role){
            return true; 
        }
    }
    return false; 
}


export function jwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};