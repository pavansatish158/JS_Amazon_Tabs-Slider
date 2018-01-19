                                // tabs content display
function openSlide(evt, Slider)     
{

    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
    tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");

    for (i = 0; i < tablink.length; i++) 
    {
    tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(Slider).style.display = "block";
    evt.currentTarget.className += " active";
    showSlidex(1);
    showSlidey(1);
}
                        // first tab slider
    var slideIndex = 1;
    function changeSlide(n) 
    {
      showSlidex(slideIndex += n);
    }
function showSlidex(n) 
{
    var i;
    var x = document.getElementsByClassName("firstslide");
    if (n > x.length) 
    {
        slideIndex = 1;
    }    
    if (n < 1) 
    {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) 
    {
        x[i].style.display = "none";  
    }
        x[slideIndex-1].style.display = "block"; 
}
                            // second tab slider
function changeImage(m)
{
    showSlidey(slideIndex += m);
}
function showSlidey(m)
{
    var i;
    var y = document.getElementsByClassName("secondslide");
    if(m > y.length)
    {
        slideIndex = 1;
    }
    if(m < 1)
    {
        slideIndex = y.length;
    }
    for (i = 0; i < y.length; i++) 
    {
        y[i].style.display = "none";  
    }
        y[slideIndex-1].style.display = "block";
}
   var tablink = document.getElementsByClassName("tablink");
   tablink[0].className += " active";

