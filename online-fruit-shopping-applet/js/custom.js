const priceList = {
	Apple: 100,
	Orange: 200,
	Grapes: 400,
	Mango: 120,
	Pomegranate: 500,
	Pineapple: 250,
	Banana: 300,
	Guava: 180
}

const updateList = function() {
	const fruit =  $( "select#fruitList option:checked" ).val();
	
	$("#price").removeAttr("value").val('');
	$("select#fruitList option:checked").prop("disabled", true);
	$("select#fruitList option").first().prop("selected", true);
	
	const quantity = Number($("#quantity").val());
	let totalCostPerKg = 0;
	let finalPrice = Number($("#totalPrice").text());
	
	if("undefined" === typeof(priceList[fruit])){
		alert("Please select fruit from the list");
	} else {
		totalCostPerKg = priceList[fruit] * quantity;
		finalPrice += totalCostPerKg;
		
		var listTemplate = $("<tr>" + "<td class='fruit-item'>" + fruit + "</td>" + "<td><input type='number' min='1' max='10' class='editquantity form-control' style='width: 60px;' id='editquantity' onchange='updateValue($(this))' value='" + quantity + "'></td>" + "<td class='fruit-cost'>"+  totalCostPerKg + "</td>" + "<td><button class='btn btn-sm btn-primary' onclick='editItem($(this))'>Edit</button> <button onclick='deleteItem($(this))' class='btn btn-sm btn-danger'>Delete</button> </td></tr>");
		$(listTemplate).appendTo("#fruitListing");
		$("#totalPrice").empty().text(finalPrice);
	}
}


function deleteItem(item) {
	$(item).parent().parent().remove();
	updateItem(item);
	updatePrice();
}

function updateItem(item) {
	var option = $(item).parent().parent().find(".fruit-item").text();
	let lengthOfTheList = $("#fruitList option").length;
	
	for ( var i = 0; i < lengthOfTheList; i++) {
		if( $("#fruitList option").eq(i).val() === option ) {
			$("#fruitList option").eq(i).prop("disabled", false);
			break;
		}
	}
}

function updatePrice() {
	let finalPrice = 0;
	$('.fruit-cost').each(function(index, element) {
		finalPrice += Number($(element).text());
	})	
	$("#totalPrice").empty().text(finalPrice);
}


function editItem(item){
  $(item).parent().parent().find('.editquantity').focus();
  const quantum = Number($('.editquantity').val());
}
function updateValue(option){
	let currentQuantity = Number($(option).val());	
	var fruit = $(option).parent().parent().find(".fruit-item").text();
	var pricePerKg = priceList[fruit];
	var updatedTotalPrice = currentQuantity * pricePerKg;
	
	updateFruitCostPerRow(option, updatedTotalPrice);
}

function updateFruitCostPerRow(item, price) {
	$(item).parent().parent().find('.fruit-cost').empty().text(price);
	updatePrice(item);
}

function updatePerKg() {
	const fruit =  $( "select#fruitList option:checked" ).val();
	$("#price").val(priceList[fruit]);
}