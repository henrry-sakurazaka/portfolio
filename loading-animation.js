// loading animation ///////////////////////////////////////////////////

$(document).ready(function(){
    $('.line').animate({'width': '100%'}, 1500, function(){
      $(this).css({'right': '0'});
      $(this).animate({'width': '0%'}, function(){
        $('.count-down').remove();
        $('.mask').animate({'height': '0%'});
        $('.mask2').animate({'height': '0%'}, function(){
            $('.big-title2').animate({'opacity':'1'}, 500);
        });
    });
  });
});

function time() {
    const start = Date.now();
    let MS = 0;
    const countdown = document.querySelector('.count-down');
    let timeoutID;

function updateMS(){
        const elapsed = Date.now() - start;
        MS = Math.floor(elapsed/ 10);
        countdown.textContent = MS < 10 ? '0' + MS : MS;
        time2();

        if(MS < 100) {
            timeoutID = setTimeout(updateMS, 10);
        }
    }

    timeoutID = setTimeout(updateMS, 10);

        function time2() {
            if(MS === 100) {
                clearTimeout(timeoutID);
            }
    }
 }

time();

// $(document).on('ready pjax:success', function() {
//     $('.line').animate({'width': '100%'}, 1500, function() {
//       $(this).css({'right': '0'});
//       $(this).animate({'width': '0%'}, function() {
//         $('.count-down').remove();
//         $('.mask').animate({'height': '0%'});
//         $('.mask2').animate({'height': '0%'}, function() {
//           $('.big-title2').animate({'opacity':'1'}, 500);
//         });
//       });
//     });
//   });
  


// $(document).ready(function() {
//     function time() {
//       const start = Date.now();
//       let MS = 0;
//       const countdown = $('.count-down');
//       let timeoutID;
  
//       function updateMS(){
//         const elapsed = Date.now() - start;
//         MS = Math.floor(elapsed / 10);
//         countdown.text(MS < 10 ? '0' + MS : MS);
//         time2();
  
//         if(MS < 100) {
//           timeoutID = setTimeout(updateMS, 10);
//         }
//       }
  
//       timeoutID = setTimeout(updateMS, 10);
  
//       function time2() {
//         if(MS === 100) {
//           clearTimeout(timeoutID);
//         }
//       }
//     }
  
//     time();
//   });
  