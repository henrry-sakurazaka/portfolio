
// プログレスバー//////////////////////////////////////////////////

window.addEventListener("scroll", () => {
  var h1=window.pageYOffset;
  var h2=window.innerHeight;
  var h3=document.documentElement.offsetHeight;
  const prg=document.querySelector('progress');
  var v=parseInt(h1/(h3-h2)*100);
  prg.value=v;
});

  
// nav /////////////////////////////////////////////////////////

    document.addEventListener("mousemove", function() {
        const center = document.querySelector(".center");
        const nav = document.querySelector(".navi");
        const dot = document.querySelector(".dot");
        const about = document.querySelector(".about");
    
    
        nav.addEventListener("mouseover", function() {
    
        center.classList.add("inview");
        });
    
        nav.addEventListener("mouseleave", function() {
    
        center.classList.remove("inview");
        });

        about.addEventListener("mouseover", function() {
          dot.classList.add("animate__animated");
        });
      
        about.addEventListener("mouseleave", function() {
          dot.classList.remove("animate__animated")
        });
    });

    // スクロール時にフワッと////////////////////////////////////////////

    const options = {
      rootMargin: "40px",
    } 
    const els = document.querySelectorAll(".observed");
    
    function cb(entries) {
     entries.forEach((entry)=>{
          if(entry.isIntersecting) {
            entry.target.classList.add("inview");
    
          }
      }); 
    }
    
    
    const io = new IntersectionObserver(cb, options);
    
    els.forEach((el) => io.observe(el));
    
    // $(document).on('ready pjax:success', function() {
    //   const options = {
    //     rootMargin: "40px",
    //   };
      
    //   const els = $(".observed");
      
    //   function cb(entries) {
    //     entries.forEach(function(entry) {
    //       if (entry.isIntersecting) {
    //         $(entry.target).addClass("inview");
    //       }
    //     });
    //   }
      
    //   const io = new IntersectionObserver(cb, options);
      
    //   els.each(function() {
    //     io.observe(this);
    //   });
    // });
    

  // プログレスバー・・・・・・・\\\\\\\\\\\\\\\\\\/////////////////////////

// $(document).ready(function() {
//   $(window).on("scroll", function() {
//     var h1 = window.pageYOffset;
//     var h2 = window.innerHeight;
//     var h3 = document.documentElement.offsetHeight;
//     const prg = $('progress');
//     var v = parseInt((h1 / (h3 - h2)) * 100);
//     prg.val(v);
//   });

//   const options = {
//     rootMargin: "96px",
//     threshold: 1
//   };  
// });

// nav サイドバー\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////



// $(document).on("mousemove", function() {
//   const center = $(".center");
//   const nav = $(".navi");
//   const dot = $(".dot");
//   const about = $(".about");

//   nav.on("mouseover", function() {
//     center.addClass("inview");
//   });

//   nav.on("mouseleave", function() {
//     center.removeClass("inview");
//   });

//   about.on("mouseover", function() {
//     dot.addClass("animate__animated");
//   });

//   about.on("mouseleave", function() {
//     dot.removeClass("animate__animated");
//   });
// });

