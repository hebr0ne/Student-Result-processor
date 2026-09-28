function processResult() {

    let name = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;

    let math = Number(document.getElementById("math").value);
    let database = Number(document.getElementById("database").value);
    let programming = Number(document.getElementById("programming").value);
    let networking = Number(document.getElementById("networking").value);

    // Check if the basic information has been entered
    if (name === "" || studentId === "") {
        alert("Please enter the student's name and ID.");
        return;
    }

    // Check if marks are valid
    if (
        math < 0 || math > 100 ||
        database < 0 || database > 100 ||
        programming < 0 || programming > 100 ||
        networking < 0 || networking > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    let total = math + database + programming + networking;
    let average = total / 4;

    let grade;

    if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else if (average >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status;

    if (average >= 40) {
        status = "PASS";
    } else {
        status = "FAIL";
    }

    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Student ID:</strong> ${studentId}</p>

        <hr>

        <p><strong>Mathematics:</strong> ${math}</p>
        <p><strong>Database:</strong> ${database}</p>
        <p><strong>Programming:</strong> ${programming}</p>
        <p><strong>Networking:</strong> ${networking}</p>

        <hr>

        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
}
