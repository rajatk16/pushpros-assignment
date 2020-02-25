const handleData = {
  display_data: function (resJSON) {
    const tableTemplate = $("#table-template").html()
    const template = Handlebars.compile(tableTemplate)
    const tableData = template(resJSON)
    $("#table-container").html(tableData)
  },

  loadData: function (url) {
    $.ajax({
      url: url,
      type: 'GET',
    }).then(this.display_data)
  }
}

$(".btn").click(() => { 
  handleData.loadData("https://aimtell.com/files/sites.json")
});