var i = 10;
var time = 1000;

setTimeout(() => {
  console.log(i);
  document.getElementById("timer").innerHTML = `<p>${i}</p>`;
  setTimeout(() => {
    console.log(i);
    document.getElementById("timer").innerHTML = `<p>${i}</p>`;
    setTimeout(() => {
      console.log(i);
      document.getElementById("timer").innerHTML = `<p>${i}</p>`;
      setTimeout(() => {
        console.log(i);
        document.getElementById("timer").innerHTML = `<p>${i}</p>`;
        setTimeout(() => {
          console.log(i);
          document.getElementById("timer").innerHTML = `<p>${i}</p>`;
          setTimeout(() => {
            console.log(i);
            document.getElementById("timer").innerHTML = `<p>${i}</p>`;
            setTimeout(() => {
              console.log(i);
              document.getElementById("timer").innerHTML = `<p>${i}</p>`;
              setTimeout(() => {
                console.log(i);
                document.getElementById("timer").innerHTML = `<p>${i}</p>`;
                setTimeout(() => {
                  console.log(i);
                  document.getElementById("timer").innerHTML = `<p>${i}</p>`;
                  setTimeout(() => {
                    console.log(i);
                    document.getElementById("timer").innerHTML = `<p>${i}</p>`;
                    setTimeout(() => {
                      console.log("Happy Independence Day!");
                      document.getElementById("timer").innerHTML = `<p class="msg">Happy Independence Day!</p>`;
                    }, time, i--);
                  }, time, i--)
                }, time, i--);
              }, time, i--);
            }, time, i--);
          }, time, i--);
        }, time, i--);
      }, time, i--);
    }, time, i--);
  }, time, i--);
}, time, i);

function restartCounter() {
  location.reload();
}