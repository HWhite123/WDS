const block = document.getElementById("block");
const current Day = document.getElementById("currentDay");

//saving event to local storage
const saveData = (ind) => {
  localStorage.setItem(ind, document.getElementById(ind).value);
};

const hour = [
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
  "12AM",
];

let storeBlock = "";

hour.map((item, ind) => {
  storeBlock += `<div class="block">
                   <div class="block-time">
                      <p>${item}</p>
                        </div>
                          <input id=${ind} type="text" />
                        <div class="saveBtn">
                      <i onclick="saveData(${ind})" class="fas fa-save"></i>
                    </div>
                 </div>`;
});

block.innerHTML = storeBlock;

setInterval(() => {
  const d = new Date();
  var responseDate = moment(d).format("dddd, MMMM Do");
  currentDay.innerHTML = responseDate;

  for (i = 0; i < hour.length; i++) {
    if (d.getHours() == 0) {
      document.getElementById("23").style.backgroundColor = "#ff6961";
      document.getElementById("22").style.backgroundColor = "#d3d3d3";
    } else {
      if (d.getHours() == i + 1) {
        document.getElementById(i).style.backgroundColor = "#ff6961";
      }
      if (i + 1 < d.getHours()) {
        document.getElementById(i).style.backgroundColor = "#d3d3d3";
      }
      if (i + 1 > d.getHours()) {
        document.getElementById(i).style.backgroundColor = "#77dd77";
      }
    }
  }
}, 1000);

const newarr = JSON.parse(JSON.stringify(localStorage));
for (const key in newarr) {
  [newarr].map((item) => {
    document.getElementById(key).value = item[key];
  });
}
