function meusvideos(){
      window.location.href = "meusvideos.html";
    }

    function meuscanais(){
      window.location.href = "meuscanais.html";
    }

    function minhasplaylists(){
      window.location.href = "minhasplaylists.html";
    }                                       

                                  var data1 = {
                                      labels: ["", "", "", ""],
                                      datasets: [
                                          {
                                              label: "Dados primários",
                                              fillColor: "rgba(233, 83, 22,0.5)", <!--background-->
                                              strokeColor: "rgba(233, 83, 22,0.8)", <!--linha-->
                                              highlightFill: "rgba(233, 83, 22,0.75)", <!--background hover-->
                                              highlightStroke: "rgba(233, 83, 22,1)", <!--linha hover-->
                                              data: [28, 48, 70, 19]
                                          },
                                      ]
                                  };

                                  var data2 = {
                                      labels: ["Canal 1", "Canal 2", "Canal 3", "Canal 4"],
                                      datasets: [
                                          {
                                              label: "Dados primários",
                                              fillColor: "rgba(233, 83, 22,0.5)", <!--background-->
                                              strokeColor: "rgba(233, 83, 22,0.8)", <!--linha-->
                                              highlightFill: "rgba(233, 83, 22,0.75)", <!--background hover-->
                                              highlightStroke: "rgba(233, 83, 22,1)", <!--linha hover-->
                                              data: [78, 84, 52, 107]
                                          },
                                      ]
                                  };  

                                   var data3 = {
                                      labels: ["Vídeo 1", "Vídeo 2", "Vídeo 3", "Vídeo 4"],
                                      datasets: [
                                          {
                                              label: "Dados primários",
                                              fillColor: "rgba(233, 83, 22,0.5)", <!--background-->
                                              strokeColor: "rgba(233, 83, 22,0.8)", <!--linha-->
                                              highlightFill: "rgba(233, 83, 22,0.75)", <!--background hover-->
                                              highlightStroke: "rgba(233, 83, 22,1)", <!--linha hover-->
                                              data: [78, 84, 52, 107]
                                          },
                                      ]
                                  }; 

                                  var data4 = {
                                      labels: ["Plataforma 1", "Plataforma 2", "Plataforma 3", "Plataforma 4"],
                                      datasets: [
                                          {
                                              label: "Dados primários",
                                              fillColor: "rgba(233, 83, 22,0.5)", <!--background-->
                                              strokeColor: "rgba(233, 83, 22,0.8)", <!--linha-->
                                              highlightFill: "rgba(233, 83, 22,0.75)", <!--background hover-->
                                              highlightStroke: "rgba(233, 83, 22,1)", <!--linha hover-->
                                              data: [78, 84, 52, 107]
                                          },
                                      ]
                                  };

                                  var data5 = {
                                      labels: ["Horário 1", "Horário 2", "Horário 3", "Horário 4"],
                                      datasets: [
                                          {
                                              label: "Dados primários",
                                              fillColor: "rgba(233, 83, 22,0.5)", <!--background-->
                                              strokeColor: "rgba(233, 83, 22,0.8)", <!--linha-->
                                              highlightFill: "rgba(233, 83, 22,0.75)", <!--background hover-->
                                              highlightStroke: "rgba(233, 83, 22,1)", <!--linha hover-->
                                              data: [78, 84, 52, 107]
                                          },
                                      ]
                                  };  

                                  var data6 = {
                                      labels: ["Região 1", "Região 2", "Região 3", "Região 4"],
                                      datasets: [
                                          {
                                              label: "Dados primários",
                                              fillColor: "rgba(233, 83, 22,0.5)", <!--background-->
                                              strokeColor: "rgba(233, 83, 22,0.8)", <!--linha-->
                                              highlightFill: "rgba(233, 83, 22,0.75)", <!--background hover-->
                                              highlightStroke: "rgba(233, 83, 22,1)", <!--linha hover-->
                                              data: [78, 84, 52, 107]
                                          },
                                      ]
                                  };

                                  window.onload = function(){
                                      var ctx1 = document.getElementById("Grafico1").getContext("2d");
                                      var BarChart1 = new Chart(ctx1).Bar(data1, {responsive : true, scaleShowGridLines : false, showScale: false});
                                      var ctx2 = document.getElementById("Grafico2").getContext("2d");
                                      ctx2.canvas.height = 300;
                                      var BarChart2 = new Chart(ctx2).Bar(data2, {responsive : true, scaleShowGridLines : false});

                                      var ctx3 = document.getElementById("Grafico3").getContext("2d");
                                      ctx3.canvas.height = 300;
                                      var BarChart3 = new Chart(ctx3).Bar(data3, {responsive : true, scaleShowGridLines : false});

                                      var ctx4 = document.getElementById("Grafico4").getContext("2d");
                                      ctx4.canvas.height = 300;
                                      var BarChart4 = new Chart(ctx4).Bar(data4, {responsive : true, scaleShowGridLines : false, maintainAspectRatio: false});

                                      var ctx5 = document.getElementById("Grafico5").getContext("2d");
                                      ctx5.canvas.height = 300;
                                      var BarChart5 = new Chart(ctx5).Bar(data5, {responsive : true, scaleShowGridLines : false});

                                      var ctx6 = document.getElementById("Grafico6").getContext("2d");
                                      ctx6.canvas.height = 300;
                                      var BarChart6 = new Chart(ctx6).Bar(data6, {responsive : true, scaleShowGridLines : false});
                                  }   