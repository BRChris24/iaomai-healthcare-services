
const footer = `
    <div class="footer-cont">


    <div>
         <h2>IAOMAI</h2>
         <br>
         <p>Leading the Way in Medical <br>
            Execellence, Trusted Care.</p>  
    </div>
    <div>
        <h3>Important Links</h3>
        <br>
        <ul>
            <li>appointment</li>
            <li>doctors</li>
            <li>services</li>
            <li>about us</li>
        </ul>
    </div>
    <div>
        <h3>Contact Us</h3>
        <br>
        <ul>
            <li>Call:09169339161</li>
            <li>Email: ioami@gmail.com</li>
            <li>whatsapp : 08143935894</li>
           
        </ul>
    </div>
    <div>
        <h3>Newsletter</h3>
        <br>
        <label for="news"> 
        <input type="text" placeholder="Enter your Email address ..." class="news-inp" name="news"> 
        <img src="./assets/icons/Vector (7).png" alt="">
        </label>
         <p>14, Colliery Avenue (valid house),ENUGU STATE, NIGERIA</p>
         
    </div>


        </div>
    
    <div class="base d-flexx">
<p>© <span id="year"></span> IAOMAI All Rights Reserved</p>
<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>
        <div>
            <img src="./assets/icons/facebook.png" alt="">
            <img src="./assets/icons/linkedin.png" alt="">
            <img src="./assets/icons/instagram.png" alt="">
        </div>
        
    </div>`;
document.getElementById("footer").innerHTML = footer;

