function formCheck() {
  if (
    document.getElementById("company_name").value == "" ||
    document.getElementById("contact_person").value == "" ||
    document.getElementById("phone_number").value == ""
  ) {
    alert("Please fill all the information");
  }
  if (document.getElementById("booth_size").value == "") {
    alert("Please choose the booth size");
  }
  if (
    document.getElementById("chair_needed").value < 1 ||
    document.getElementById("chair_needed").value > 10
  ) {
    alert("Number of Chair(s) must between 1-10");
  }
}
