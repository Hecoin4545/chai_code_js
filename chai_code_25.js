function setUserName(username) {
  this.username = username;
}

// see idhar humne kya kiya hai ki niche wale function mai hum upar wale function se username le rahe hai amd email and password toh niche wale function mai hi declare kar rahe hai so agar hume asa karna hai than humne .call function ko call karke this key add karna padega as we did it in line 7 use kya hoga ki ab jo upar wala setusername wala function vo ab niche wala createuser wala this use karega
function createUser(username, email, password) {
  setUserName.call(this, username);
  (this.email = email), (this.password = password);
}

const het = new createUser('het', 'het@gmail.com', '11');
console.log(het);
