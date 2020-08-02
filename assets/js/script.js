// ############  Instructions - SOP on how to use the tool  #############
const instructions = {
  msg:
    "The tracking URL will enable you to track traffic from your tactic to your target web page. Here’s a brief SOP on how to use this.",
  instructions_list: [
    "<li><b>URL</b> (required): Enter the target URL where you want to send users for your campaign tactic. <b>For global campaigns,</b> remove country and language designation. <ul><li> Example:</li><li class='campaignURL'> Original URL: <a href= 'https://www.cytivalifesciences.com/en/us/solutions/protein-research'>https://www.cytivalifesciences.com/en/us/solutions/protein-research </a><li class='campaignURL'>Instead use: <a href='https://www.cytivalifesciences.com/solutions/protein-research'> https://www.cytivalifesciences.com/solutions/protein-research </a></li></li></ul></li>",
    "<li> <b>Campaign code </b> (required):  Enter the SFDC campaign number without any spaces. <a href='https://app.smartsheet.com/b/home?dlp=%2Fsheets%2FJC6JpRchGxpQPmCJ9g3W6jpvX3X7X657XPp7wRP1&dlq=view%3Dgrid'>You can find/generate campaign code here</a></li>",
    "<li><b>Channel</b>: Select your marketing tactic from the drop-down list.</li>",
    "<li><b>Marketing Category:</b> Select the source — where your tracking URL will be located — from the drop-down list.</li>",
    "<li><b>Description</b> (optional): Add a descriptor to differentiate your specific tactic. Type with no spaces. This will be embedded in the URL. Examples Different banner sizes or colors: 125x125, 240x400, 125x125blue  Versions for A/B testing: headerA, headerB</li>",
    "<li>Click on the “Generate URL” button to generate the tracking URL, which will appear in the box below the button.</li>",
    "<li>Test the URL to be sure it opens the target URL as intended.</li>",
    "<li>Copy the tracking URL to clipboard by clicking the “Copy URL” button. </li>",
    "<li>Paste the tracking URL into the appropriate field in your Kapost project.</li>",
    "<li>For QR code generation, take the tracking URL to <a href= 'https://www.qrcode-monkey.com/' target='_blank'> https://www.qrcode-monkey.com/ </a> and follow the steps to create a trackable QR code for use with printed materials.",
    "<li>Please reach out to the digital marketing data team with any questions.</li>"
  ]
};

// ############ Displaying instructions in front end ########################################################
// Instructions head
let instructionsHead = instructions.msg;
document.getElementById("instructions_head").innerHTML = instructionsHead;

// Instructions body
let instructionsBody = "";

//Looping through instructions arrya and printing on the screen
for (i = 0; i < instructions.instructions_list.length; i++) {
  instructionsBody += instructions.instructions_list[i];
  document.getElementById("instructions_body").innerHTML = instructionsBody;
}

// ############ URL generator drop down data ###################################################################
// Marketing  Channel and Marketing category - array of objects
const marketing_tools = [
  {
    tool_id: 00,
    medium: "",
    stored_value: "",
    sources: ["|"]
  },
  {
    tool_id: 01,
    medium: "E-mail",
    stored_value: "em",
    sources: [
      "|",
      "int|Internal E-mail",
      "exv|External email vendor",
      "msi|MSI email",
      "incm|Internal Communication"
    ]
  },
  {
    tool_id: 02,
    medium: "Direct Mail",
    stored_value: "dm",
    sources: ["|", "ex|Direct Mail External", "vn|Direct Mail Vendor"]
  },
  {
    tool_id: 03,
    medium: "Telemarketing",
    stored_value: "TM",
    sources: ["|", "TM|Telemarketing"]
  },
  {
    tool_id: 04,
    medium: "Banners",
    stored_value: "BN",
    sources: ["|", "BNEX|Banner Ads External", "BNIN|Banner Ads Internal"]
  },
  {
    tool_id: 05,
    medium: "Social Media",
    stored_value: "SM",
    sources: [
      "|",
      "FB|Facebook",
      "FBG|Facebook Groups",
      "LI|Linkedin",
      "LIG|Linkedin Groups",
      "LIE|Linkedin Elevate",
      "TW|Twitter",
      "PIN|Pinterest",
      "YT|YouTube",
      "RG|ResearchGate",
      "RD|Reddit",
      "GMB|Google My Business",
      "IS|Instagram",
      "KT|Kakao Talk"
    ]
  },
  {
    tool_id: 06,
    medium: "Social Paid",
    stored_value: "SMP",
    sources: [
      "|",
      "FBPD|Facebook Paid Ads External",
      "TWPD|Twitter Paid",
      "LIPD|Linkedin Paid",
      "RGPD|Paid ResearchGate",
      "IGPD|Instagram Paid",
      "RDPD|Reddit Paid"
    ]
  },
  {
    tool_id: 07,
    medium: "Videos",
    stored_value: "VD",
    sources: ["|", "VY|VidYard", "YT|Youtube", "WB|Webinar", "VM|Vimeo"]
  },
  {
    tool_id: 08,
    medium: "Microsite",
    stored_value: "MS",
    sources: ["|", "MSEX|3RD PARTY MICROSITE", "MS|Microsite", "PB|PUBLISHING"]
  },
  {
    tool_id: 09,
    medium: "Publishing",
    stored_value: "PS",
    sources: [
      "|",
      "FLY|Flyers",
      "BRC|Brochures",
      "APN|App note",
      "DTF|Data File",
      "WP|White Paper"
    ]
  },
  {
    tool_id: 10,
    medium: "Redirect",
    stored_value: "RD",
    sources: ["|", "RDR|Redirects"]
  },
  {
    tool_id: 11,
    medium: "Other",
    stored_value: "OT",
    sources: ["|", "SMP|Sample request", "QRC|QR Codes", "BS|BrainShark"]
  },
  {
    tool_id: 12,
    medium: "Events",
    stored_value: "EVNT",
    sources: ["|", "ETC|Events/Tradeshows/Conference"]
  },
  {
    tool_id: 13,
    medium: "Mobile Apps",
    stored_value: "AP",
    sources: [
      "|",
      "ADR|Android",
      "IOS|Apple",
      "BB|Blackberry",
      "MS|Microsoft",
      "OT|Other Mobile App"
    ]
  },
  {
    tool_id: 14,
    medium: "Webinar",
    stored_value: "WB",
    sources: ["|", "WBIN|Internal Webinar", "WBEX|External Webinar"]
  },
  {
    tool_id: 16,
    medium: "Search",
    stored_value: "SE",
    sources: [
      "|",
      "GDN|Google Display Network",
      "DSP|Display",
      "ORG|Organic Search",
      "PAID|Paid Search"
    ]
  }
];

// ############ Populating Marketing channel ##################################################################
// array to store options for medium
var medium_options_html = [];

//Looping through array and pusing options for medium
for (i = 0; i < marketing_tools.length; i++) {
  let option = marketing_tools[i].medium;
  let value = marketing_tools[i].stored_value;

  //Printing medium options on the page
  document.getElementById(
    "marketing_medium"
  ).innerHTML += `<option value="${value}">${option}</option>`;
}

// ############ Populating Marketing Category based on user selection of marketing channel ########################
const populateMarketingSource = (marketing_medium, marketing_source) => {
  //When marketing medium is changed make sources options empty
  document.getElementById("marketing_source").innerHTML = "";
  document.getElementById("marketing_source").value = "";

  // putting new medium option selected by user
  var medium_option = document.getElementById(marketing_medium);

  //Looping through marketing tools to find option entered by user
  for (i = 0; i < marketing_tools.length; i++) {
    let currentOption = marketing_tools[i].stored_value;

    // When the user entered option is found in marketing tools array
    if (currentOption === medium_option.value) {
      let optionsArray = marketing_tools[i].sources;
      //Looping through sources array and printing options
      for (var option in optionsArray) {
        var pair = optionsArray[option].split("|");
        document.getElementById(
          "marketing_source"
        ).innerHTML += `<option value="${pair[0]}">${pair[1]}</option>`;
      }

      return;
    }
  }
};

/* ###### URL FORMAT #########################################################################
#                                                                                            #
#       (URL)?extcmp=(camapign code)-(channel)-(source/marketing category)-(description)     #
#                                                                                            #
############################################################################################ */

//Function that executes once the user hits generate URL  buton
// Main function
$(document).ready(() => {
  // Listen to submit event on the <form> itself!
  $("#urlGeneratorForm").submit(e => {
    // Prevent form submission which refreshes page
    e.preventDefault();

    let trackingURL = "";
    let URL = $("#landing_url")
      .val()
      .trim()
      .toLowerCase();

    //Checking if URL field is empty
    if (URL.length < 1) {
      $("#empty_urlErr").show();
      $("#url_invalidCharacters").hide();

      //If the URL is not empty - validating it is in correct format
    } else {
      $("#empty_urlErr").hide();
      if (/[^a-zA-Z0-9\-\.\_\~\:\(.com)\=\?\&\/]/.test(URL)) {
        $("#url_invalidCharacters").show();
        return false;
      } else if (URL.indexOf(".com") < 1) {
        $("#url_invalidCharacters").show();
        return false;
      } else if (/[^a-zA-Z0-9]/.test(URL[0])) {
        $("#url_invalidCharacters").show();
        return false;

        //If URL validation test passes - Starting appending to tracking url with is empty as of now
      } else {
        $("#url_invalidCharacters").hide();
        $("#learnMore_urlCodeChars").hide();
        trackingURL += `${URL}?extcmp=`;
      }
    }

    //Campaign code
    let campaign_id = $("#campaign_id")
      .val()
      .trim();

    //If user enters hypen at the end of campaign code by mistake take it off
    if (campaign_id.slice(-1) === "-") {
      campaign_id = campaign_id.slice(0, -1);
    }

    //If campaign code is empty display error and exit
    if (campaign_id.length < 1) {
      document.getElementById("invalid-input").style.display = "inline";
      document.getElementById("campaignCode_invalidCharacters").style.display =
        "none";
      return;

      //If campaign code is not empty run a validation test
    } else {
      document.getElementById("invalid-input").style.display = "none";
      if (/[^a-zA-Z0-9\-\.\_\?\&\/\~\:\/]/.test(campaign_id)) {
        document.getElementById(
          "campaignCode_invalidCharacters"
        ).style.display = "inline";
        return false;
      } else {
        document.getElementById(
          "campaignCode_invalidCharacters"
        ).style.display = "none";
        document.getElementById("learnMore_campaignCodeChars").style.display =
          "none";
        // If campaign code validation pass - append to trackingURL
        trackingURL += campaign_id;
      }
    }

    // Marketing channel
    let marketing_medium = $("#marketing_medium")
      .val()
      .trim();

    //If user selects marketing channel from dropdown - append to tracking url
    marketing_medium =
      marketing_medium.length > 0 ? `-${marketing_medium}` : "";
    trackingURL += `${marketing_medium}`;

    //Marketing Category
    let marketing_source = $("#marketing_source")
      .val()
      .trim();

    // If user picks marketing source append to tracking url - if not append nothing
    marketing_source =
      marketing_source.length > 0 ? `-${marketing_source}` : "";
    trackingURL += `${marketing_source}`;

    //Getting Marketing Description
    let description = $("#description")
      .val()
      .trim();

    //If user inputs description validate the input
    if (description.length > 0) {
      //If description does not have valid chars - show err and return
      if (/[^a-zA-Z0-9\-\.\_\~\?\&\/\:]/.test(description)) {
        document.getElementById("description_invalidCharacters").style.display =
          "inline";
        return false;

        //If description passes validation test - append to tracking URL
      } else {
        document.getElementById("description_invalidCharacters").style.display =
          "none";
        document.getElementById("learnMore_descriptionChars").style.display =
          "none";
        trackingURL += `-${description}`;
      }

      //If user does not enter description - no validation required ; hide any error messages
    } else {
      document.getElementById("description_invalidCharacters").style.display =
        "none";
    }
    //Changing tracking url to lower case
    trackingURL = trackingURL.toLowerCase();

    //Displaying tracking URL in front end.
    document.getElementById("trackingURL").innerHTML = trackingURL;
  });
});

//########################## End of Generate URL function ################################################

// ##################   Copy to clipboard function ########################################################
const copyToClipBoard = () => {
  var copyText = document.getElementById("trackingURL");

  if (
    //If user tries to copy empty tracking URL
    $("#trackingURL")
      .val()
      .trim().length < 1
  ) {
    document.getElementById("copySucessAlert").style.display = "none";
    document.getElementById("copyFailedAlert").style.display = "block";
    return;

    // If there is string to copy - hide any failed alert and copy URL
  } else {
    document.getElementById("copyFailedAlert").style.display = "none";
    copyText.select();
    document.execCommand("copy");
    document.getElementById("copySucessAlert").style.display = "block";
  }
};

// ########################  Reset form Function #######################################################
// When rest form button is clicked - reset all fields to default
const resetInput = () => {
  $("#landing_url").val(() => {
    return this.defaultValue;
  });
  $("#campaign_id").val(() => {
    return this.defaultValue;
  });
  $("#marketing_medium").val(() => {
    return this.defaultValue;
  });
  $("#marketing_source").val(() => {
    return this.defaultValue;
  });
  $("#description").val(() => {
    return this.defaultValue;
  });
  document.getElementById("trackingURL").innerHTML = "";

  //Hide all alerts, errors and success messages
  $("#copyFailedAlert").hide();
  $("#copySucessAlert").hide();
  $("#invalid-input").hide();
  $("#campaignCode_invalidCharacters").hide();
  $("#learnMore_campaignCodeChars").hide();
  $("#description_invalidCharacters").hide();
  $("#learnMore_descriptionChars").hide();
  $("#hide_learnMore_campaignCodeChars").hide();
  $("#hide_learnMore_descriptionChars").hide();
  $("#display_learnMore_campaignCodeChars").show();
  $("#display_learnMore_descriptionChars").show();
  $("#url_invalidCharacters").hide();
};

// Display and hide errs for invalid characters input in campaign code input box
showUrlInvalidCharsDetails = () => {
  $("#display_learnMore_urlCodeChars").hide();
  $("#hide_learnMore_urlCodeChars").show();
  $("#learnMore_urlCodeChars").show();
};

hideUrlInvalidCharsDetails = () => {
  $("#hide_learnMore_urlCodeChars").hide();
  $("#display_learnMore_urlCodeChars").show();
  $("#learnMore_urlCodeChars").hide();
};

// Display and hide errs for invalid characters input in campaign code input box
showCampaignCodeInvalidCharsDetails = () => {
  $("#display_learnMore_campaignCodeChars").hide();
  $("#hide_learnMore_campaignCodeChars").show();
  $("#learnMore_campaignCodeChars").show();
};

hideCampaignCodeInvalidCharsDetails = () => {
  $("#hide_learnMore_campaignCodeChars").hide();
  $("#display_learnMore_campaignCodeChars").show();
  $("#learnMore_campaignCodeChars").hide();
};

// Display and hide errs for invalid characters input in campaign code description box
showInvalidCharsDes = () => {
  $("#display_learnMore_descriptionChars").hide();
  $("#hide_learnMore_descriptionChars").show();
  $("#learnMore_descriptionChars").show();
};

hideInvalidCharsDes = () => {
  $("#hide_learnMore_descriptionChars").hide();
  $("#display_learnMore_descriptionChars").show();
  $("#learnMore_descriptionChars").hide();
};
