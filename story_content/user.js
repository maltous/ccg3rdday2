function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mWp8ZK35jq":
        Script1();
        break;
      case "6P3f2bZLojF":
        Script2();
        break;
      case "5jurboZPpug":
        Script3();
        break;
      case "5Yml2U7evrI":
        Script4();
        break;
      case "6dAXHJAedCt":
        Script5();
        break;
      case "5c6boBFbsX1":
        Script6();
        break;
      case "5X3ObzZsXNI":
        Script7();
        break;
      case "60XTaokYVcQ":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

