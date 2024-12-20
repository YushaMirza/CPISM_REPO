let students = [
    ["1", "Yusha Mirza", "ADSE", "+923234567890", "yusha@gmail.com"],
    ["2", "Musab Bin Umair", "ADSE", "+922345678901", "musab@gmail.com"],
    ["3", "Mansoor Khan", "ADSE", "+923456789012", "mansoor@gmail.com"],
    ["4", "Abdul Basit", "HDSE", "+924567890123", "basit@gmail.com"],
    ["5", "Haider Sultan", "DISM", "+925678901234", "haider@gmail.com"],
    ["6", "Zohaib", "ADSE", "+926789012345", "zohaib@gmail.com"],
    ["7", "Ali", "HDSE", "+927890123456", "ali@gmail.com"],
    ["8", "Abdul Haq", "ADSE", "+928901234567", "abdulhaq@gmail.com"],
    ["9", "Asad", "ADSE", "+929012345678", "asad@gmail.com"],
    ["10", "Awais", "HDSE", "+920123456789", "awais@gmail.com"],
    ["11", "Yumna", "ADSE", "+921234509876", "yumna@gmail.com"],
    ["12", "Rija", "ADSE", "+922345609876", "rija@gmail.com"],
    ["13", "Hala", "DISM", "+923456709876", "hala@gmail.com"],
    ["14", "Afifa Zia", "HDSE", "+924567809876", "afifa@gmail.com"],
    ["15", "Amal Aamir", "ADSE", "+925678909876", "amal@gmail.com"]
];

let data = "";

for( let i = 0; i < students.length; i++){
    let rowColor = i % 2 == 0 ? "even" : "odd";
    data += `<tr class = "${rowColor}">`;
    for( let j = 0; j < students[i].length; j++){
        data += `<td>${students[i][j]}</td>`;
    }
    `</tr>`
}

document.querySelector("#studentTable tbody").innerHTML = data;