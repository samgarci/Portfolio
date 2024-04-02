//for astroPic animation
$(document).ready(function() {
    var triggerPosition = $(".astro").offset().top - $(window).height() + 200;

    $(window).scroll(function() {
      if ($(window).scrollTop() > triggerPosition) {
        $(".astro").css("opacity", 1);
      }
    });
  });

  //for circle animations--should simplify if time
  $(document).ready(function(){
    $(".circle1").mouseenter(function(){
      $(".circle1").animate({
        height: '200px',
        width: '200px',
      });
    });
    $(".circle1").mouseleave(function(){
      $(".circle1").animate({
        height: '150px',
        width: '150px'
      });
    });
  });
  $(document).ready(function(){
    $(".circle2").mouseenter(function(){
      $(".circle2").animate({
        height: '250px',
        width: '250px',
      });
    });
    $(".circle2").mouseleave(function(){
      $(".circle2").animate({
        height: '200px',
        width: '200px'
      });
    });
  });
  $(document).ready(function(){
    $(".circle3").mouseenter(function(){
      $(".circle3").animate({
        height: '200px',
        width: '200px',
      });
    });
    $(".circle3").mouseleave(function(){
      $(".circle3").animate({
        height: '150px',
        width: '150px'
      });
    });
  });
  $(document).ready(function(){
    $(".circle4").mouseenter(function(){
      $(".circle4").animate({
        height: '150px',
        width: '150px',
      });
    });
    $(".circle4").mouseleave(function(){
      $(".circle4").animate({
        height: '100px',
        width: '100px'
      });
    });
  });

  //rocket ship animation
  $(document).ready(function() {
    var triggerPosition2 = $(".ship").offset().top - $(window).height() + 200;

    $(window).scroll(function() {
      if ($(window).scrollTop() > triggerPosition2) {
        $(".ship").animate({
            bottom:'100%',
        }, 2000);
      }
    });
  });


  //contact form validation
  function validateForm() {
    let x = document.forms["contactForm"]["fname"].value;
    let y = document.forms["contactForm"]["eaddress"].value;
  
  if (x === "" && y === "") {
    alert("Name and email are required");
    return false;
  }
  else if (x === "") {
    alert("Name is required");
    return false;
  }
  else if (y === "") {
    alert("Email is required");
    return false;
  }
  else {
    alert("Message Sent!")
  return true;
    }
  }


//tabs on resume page
  $(document).ready(function () {
    console.log("document ready");
  
    const labels = document.querySelectorAll(".accordion-item__label");
    const tabs = document.querySelectorAll(".accordion-tab");
  
    function toggleShow() {
      const target = this;
      const item = target.classList.contains("accordion-tab") ?
        target :
        target.parentElement;
      const group = item.dataset.actabGroup;
      const id = item.dataset.actabId;
  
      tabs.forEach(function (tab) {
        if (tab.dataset.actabGroup === group) {
          if (tab.dataset.actabId === id) {
            tab.classList.add("accordion-active");
          } else {
            tab.classList.remove("accordion-active");
          }
        }
      });
  
      labels.forEach(function (label) {
        const tabItem = label.parentElement;
  
        if (tabItem.dataset.actabGroup === group) {
          if (tabItem.dataset.actabId === id) {
            tabItem.classList.add("accordion-active");
          } else {
            tabItem.classList.remove("accordion-active");
          }
        }
      });
    }
  
    labels.forEach(function (label) {
      label.addEventListener("click", toggleShow);
    });
  
    tabs.forEach(function (tab) {
      tab.addEventListener("click", toggleShow);
    });
  
  });