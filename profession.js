var selectFunc = document.getElementById("Profession");

function onChange(){
  const professions = ["Profession1", "Profession2", "Profession3", "Profession4"];
  const selectedValue = selectFunc.value;

  if (selectedValue === "None") {
      professions.forEach((profession) => {
        const elementId = `${profession}_Qs`;
        document.getElementById(elementId).hidden = true
      });
  } else {
      professions.forEach((profession) => {
          const elementId = `${profession}_Qs`;
          document.getElementById(elementId).hidden = (selectedValue !== profession);
      });
  }
}

selectFunc.onchange = onChange;
onChange();