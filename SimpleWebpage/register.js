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
}
