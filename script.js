document.addEventListener("DOMContentLoaded", () => {
  const vozila = {
    Audi: {
      modeli: {
        "A4": ["2.0 TDI", "3.0 TDI"],
        "A6": ["2.0 TFSI", "3.0 TFSI"]
      }
    },
    BMW: {
      modeli: {
        "320i": ["2.0", "2.5"],
        "X5": ["3.0", "4.4"]
      }
    },
    Volkswagen: {
      modeli: {
        "Golf": ["1.6 TDI", "2.0 TSI"],
        "Passat": ["2.0 TDI", "3.6 FSI"]
      }
    }
  };

  const markaSelect = document.getElementById("marka");
  const modelSelect = document.getElementById("model");
  const motorSelect = document.getElementById("motor");

  // Kad se promijeni marka, puni modele
  markaSelect.addEventListener("change", () => {
    const marka = markaSelect.value;
    
    // Očisti prethodne opcije modela i motora
    modelSelect.innerHTML = '<option selected disabled>Odaberite model</option>';
    motorSelect.innerHTML = '<option selected disabled>Odaberite motorizaciju</option>';
    
    if (vozila[marka]) {
      const modeli = vozila[marka].modeli;
      for (const model in modeli) {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      }
    }
  });

  // Kad se promijeni model, puni motorizaciju
  modelSelect.addEventListener("change", () => {
    const marka = markaSelect.value;
    const model = modelSelect.value;

    motorSelect.innerHTML = '<option selected disabled>Odaberite motorizaciju</option>';
    
    if (vozila[marka] && vozila[marka].modeli[model]) {
      const motori = vozila[marka].modeli[model];
      motori.forEach(motor => {
        const option = document.createElement("option");
        option.value = motor;
        option.textContent = motor;
        motorSelect.appendChild(option);
      });
    }
  });
});


