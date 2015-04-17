

var ref= new Firebase("https://anthillsignup.firebaseio.com/jobPost");

var company_name;
var job_category;
var job_description;
var job_timeframe;
var job_title;
var pay_yn;
var pay_type;
var pay_amount;
var start_date;
var end_date;


$(document).ready(function() {
	//For initial if they don't change them
	company_name=$('#payType').val();




	$('#compName').change(function() {
		company_name=$(this).val();
	});
	$('#jobCat').change(function() {
		job_category=$(this).val();
	});
	$('#jobTitle').change(function() {
		job_title=$(this).val();
	});
	$('#jobDesc').change(function() {
		job_description=$(this).val();
	});
	$('#jobTime').change(function() {
		job_timeframe=$(this).val();
	});
	$('#payYn').change(function() {
		pay_yn=$(this).val();
	});
	$('#payType').change(function() {
		pay_type=$(this).val();
	});
	$('#payAmount').change(function() {
		pay_amount=$(this).val();
	});
	$('#startDate').change(function() {
		start_date=$(this).val();
	});
	$('#endDate').change(function() {
		end_date=$(this).val();
	});

});

function sendData(){
	ref.push({
		companyName: company_name,
		jobCategory: job_category,
		jobDescription: job_description,
		jobTimeframe: job_timeframe,
		jobTitle: job_title,
		paidYN: pay_yn,
		payType: pay_type,
		startDate: start_date,
		endDate: end_date,
		payAmount: pay_amount
  	});
}