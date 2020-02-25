const handleData = {
  
  display_data: function (resJSON) {
    const tableTemplate = $("#table-template").html()
    const template = Handlebars.compile(tableTemplate)
    const tableData = template(resJSON)
    $("#table-container").html(tableData)
  },

  loadData: function (url, dataType) {
    $.ajax({
      url: url,
      type: "GET",
      crossDomain: true,
      dataType: dataType,
      success: this.display_data,
      error: function() {
        alert("Request has failed because of CORB. While I am trying to find a solution for this new web feature, please use the other button to load table data")
      }
    })
  }
}

$(".load-from-api").click(() => { 
  handleData.loadData("http://aimtell.com/files/sites.json", 'jsonp')
});

$(".load-offline").click(() => {
  handleData.loadData("/data/offlineData.json", 'json')
})