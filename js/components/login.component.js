var login = document.getElementById("login");

const loginContainer = () => {
  let login = document.getElementById("loginDivToDisplay");

  login.innerHTML = `
 
  <button id="loginModalBtn"><i class="bx bxs-user-circle"></i></button>
  <div id="loginModal" class="loginModal">
  <span class="close">&times;</span>
  
    <div class="login-content">
    <h2>Login</h2>
   
   <input type="text" placeholder="Username" required>
   
   <input type="password" placeholder="Password" required>
    <label class="checkbox">
      <input  type="checkbox" checked="checked">Remember me
    </label>
    <div>
    <button type="submit">Login</button>
    <a href="register.html" class="btn">Register</a>
   </div>
    </div>
   
  </div>

  `;
};
loginContainer();

var modal = document.getElementById("loginModal");

var btn = document.getElementById("loginModalBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
