let data = [
    { name: "F-22 Raptor", role: "Stealth Fighter" },
    { name: "F-35 Lightning II", role: "Multirole Fighter" },
    { name: "Su-57", role: "Stealth Fighter" },
    { name: "Eurofighter Typhoon", role: "Air Superiority Fighter" },
    { name: "F/A-18 Hornet", role: "Multirole Fighter" },
    { name: "F-15 Eagle", role: "Air Superiority Fighter" },
    { name: "Dassault Rafale", role: "Multirole Fighter" },
    { name: "Lockheed Martin F-16 Fighting Falcon", role: "Multirole Fighter" },
    { name: "J-20 Mighty Dragon", role: "Stealth Fighter" },
    { name: "Grumman F-14 Tomcat", role: "Fleet Defense Fighter" }
];

function displayData(filteredData = data) {
    let tableBody = document.getElementById("dataTable");
    tableBody.innerHTML = "";

    filteredData.forEach(item => {
        let row = `<tr>
            <td>${item.name}</td>
            <td>${item.role}</td>
            <td><button onclick="deleteData('${item.name}')">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function addData() {
    let name = document.getElementById("nameInput").value.trim();
    let role = document.getElementById("roleInput").value.trim();

    if (!name || !role) {
        alert("Please enter both name and role.");
        return;
    }

    data.push({ name, role });
    displayData();

    document.getElementById("nameInput").value = "";
    document.getElementById("roleInput").value = "";
}

function deleteData(name) {
    data = data.filter(item => item.name !== name);
    displayData();
}

function searchData() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let filteredData = data.filter(item => item.name.toLowerCase().includes(searchValue));
    displayData(filteredData);
}

document.addEventListener("DOMContentLoaded", () => displayData());


images = document.querySelectorAll('img');

const mouseE = (evt) => {
    evt.target.className = "animate"
    thisimage = evt.target.getAttribute('src');
    newimage = thisimage.replace('thumbnail', 'bw')
    evt.target.setAttribute('src', newimage)
}

const mouseL = (evt) => {
    evt.target.className = "animate2"
	evt.target.setAttribute('src', thisimage)
}

images.forEach((item) => {
    item.addEventListener('mouseenter', mouseE);
    item.addEventListener('mouseleave', mouseL)
})

const name = document.getElementById('commentName').value.trim() || 'Anonymous';
comments.push({ name, text: commentText });
