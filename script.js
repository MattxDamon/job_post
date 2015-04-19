

var ref= new Firebase("https://anthillsignup.firebaseio.com/jobPost");

var company_name='';
var company_email='';
var company_location='';
var company_industry='';
var job_category='';
var job_description='';
var job_timeframe='';
var job_title='';
var pay_yn='';
var pay_type='';
var pay_amount='';
var start_date='';
var end_date='';
var start_date_other='';
var end_date_other='';


var payReqs=false;
var catPlace='';
var timePlace='';
var radioChecking=["#writing","#finance","#entertainment", "#salesmarketing","#socialmedia", "#eventproduction", "#fineart", "#mobileapp", '#photofilm', '#Videography', '#website', '#graphicdesign', '#other', "#days","#weeks","#months", "#ongoing", "#payYn", "#startASAP", "#startother", "#gig", "#endNone", "#endFlex", "#endother"];
var inputBoxes=['#endDateOther','#startDateOther','#payAmount',"#jobDesc","#jobTitle"];

$(document).ready(function() {
	//For initial if they don't change them
	pay_type=$('#payType').val();



	$('#compName').change(function() {
		company_name=$(this).val();
	});
	$('#industry').change(function() {
		company_industry=$(this).val();
	});
	$('#email').change(function() {
		company_email=$(this).val();
	});
	$('#location').change(function() {
		company_location=$(this).val();
	});



// This is the job category selection
	$('#writing').click(function() {
		job_category='Writing';

	});
	$('#finance').click(function() {
		job_category='Finance';
	});
	$('#entertainment').click(function() {
		job_category='Entertainment';
	});
	$('#salesmarketing').click(function() {
		job_category='Sales & Marketing';
	});
	$('#socialmedia').click(function() {
		job_category='Social Media';
	});
	$('#eventproduction').click(function() {
		job_category='Event Production';
	});	
	$('#fineart').click(function() {
		job_category='Fine Art';
	});	
	$('#mobileapp').click(function() {
		job_category='Mobile Apps';
	});	
	$('#photofilm').click(function() {
		job_category='Photography';
	});	
	$('#Videography').click(function() {
		job_category='Videography';
	});
	$('#website').click(function() {
		job_category='Building Websites';
	});		
	$('#graphicdesign').click(function() {
		job_category='Graphic Design';
	});		
	$('#other').click(function() {
		job_category='Other';
	});		



//this is the timeframe selection
	$('#days').click(function() {
		job_timeframe='Days';
	});
	$('#weeks').click(function() {
		job_timeframe='Weeks';
	});
	$('#months').click(function() {
		job_timeframe='Months';
	});
	$('#ongoing').click(function() {
		job_timeframe='Ongoing';
	});


	$('#jobTitle').change(function() {
		job_title=$(this).val();
	});

	$('#jobDesc').change(function() {
		job_description=$(this).val();
	});



	$('#payYn').click(function() {
		if (!payReqs){
			payReqs=true;
			pay_yn="Unpaid";
			console.log("HEY");
		}
		else{
			pay_yn="Paid";
			checkPayReqs();
			console.log("HEYO");
		}
	});

	$('#payType').change(function() {
		pay_type=$(this).val();
		checkPayReqs();
	});

	$('#payAmount').change(function() {
		pay_amount=$(this).val();
		checkPayReqs();
	});

//Start Date
	$('#startasap-reveal').click(function() {
		start_date='ASAP';
	});
	$('#startDateOther').change(function() {
		start_date=$(this).val();
	});

//End Date
	$('#gig-reveal').click(function() {
		end_date='One Day Gig';
	});
	$('#endnone-reveal').click(function() {
		end_date='No Deadline';
	});
	$('#endflexible-reveal').click(function() {
		end_date='Flexible Deadline';
	});	
	$('#endDateOther').change(function() {
		end_date=$(this).val();
	});
});

function sendData(){
	var errors = '';


	if (company_name != '' && company_email != '' && company_location != '' && company_industry != '' &&  job_category!= '' &&  job_description!= '' &&  job_timeframe!= '' &&  job_title!= '' &&  payReqs && start_date!= '' && end_date!= '') {
		ref.push({
			companyName: company_name,
			companyEmail: company_email,
			companyLocation: company_location,
			companyIndustry: company_industry,
			jobCategory: job_category,
			jobDescription: job_description,
			jobTimeframe: job_timeframe,
			jobTitle: job_title,
			paidYN: pay_yn,
			payType: pay_type,
			payAmount: pay_amount,
			startDate: start_date,
			endDate: end_date	
	  	});
            
        
	    event.preventDefault();
        
	    $.ajax({
	        
	        success: function() {
				$('#mainImage').hide();
				$('.container').hide();
				$('.sub-title').hide();

				//Here is where you can add css for the post another job page
				$('.sub-title').html('<h1>Thanks for posting a job!</h1><input style="float: center;" type="submit" value="POST ANOTHER" class="btn btn-submit-post" onclick="rePost();">').fadeIn();
	        }
	    });
    }
        
    else if (company_name == '') {
        errors += " enter a company name";   
    }
    else if (company_email == '') {
        errors += " enter an email";   
    }
    else if (company_location == '') {
        errors += " enter a location";   
    }
    else if (company_industry == '') {
        errors += " enter an industry";   
    }  
    else if (job_category == '') {
        errors += " enter a job category";   
    }    
    else if (job_description == '') {
        errors += " enter a job description";   
    }   
    else if (job_timeframe == '') {
        errors += " enter a job timeframe";   
    }   
    else if (job_title == '') {
        errors += " enter a job title";   
    }   
    else if (!payReqs) {
        errors += " enter payment details";   
    }   
    else if (start_date == '') {
        errors += " enter a start date";   
    }   
    else if (end_date == '') {
        errors += " enter an end date";   
    }
    if (errors != '') {
        handleError(errors);   
    }
    
};



function rePost(){
	//showing job parts of the page again, not the sub title the second time (although we could)
	$('#mainImage').show();
	$('.sub-title').hide();

	//Clearing Active Radioboxes
	for (var i=0; i<radioChecking.length; i++) {
		$(radioChecking[i]).prop('checked', false);
	}

	//Clearing the input fields
	for (var j=0; j<inputBoxes.length; j++) {
		$(inputBoxes[j]).val('');
	}
	$("#start-reveal-if-active").hide();
	$("#end-reveal-if-active").hide();

	$('#payType').val("For the Project");

	$('.container').slideDown();
}

function checkPayReqs () {
	if (!($('#payYn').attr('checked')) && ($('#payType').val()=="")||($('#payAmount').val()=="")){
		payReqs=false;
	}
	else{
		payReqs=true;
	}
}

function handleError(errors) {
         $('.error').html('<p>' + '*Please fix the following problems: ' + errors + '</p').fadeIn();   
}
