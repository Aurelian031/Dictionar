var cuvinteSalvate = [];

      function salveazaCuvant() {
        var cuvant = document.getElementById("cuvant").value;
        cuvinteSalvate.push(cuvant);
        document.getElementById("cuvant").value = "";
      }
        
      function cautaCuvant() {
            var inputCautare = document.getElementById("cauta");
            var mesajCautare = document.getElementById("mesaj-cautare");
            mesajCautare.innerText = "";
               if (cuvinteSalvate.includes(inputCautare.value)) {
                mesajCautare.innerText = "Cuvântul se află în dicționar.";
              } else {
                mesajCautare.innerText = "Cuvântul nu există în dicționar.";
              }
              document.getElementById("cauta").value = "";
            }
            
          