//Instructions
const instructions = {
  msg:
    "The tracking URL will enable you to track traffic from your tactic to your target web page. <span id='showInstructions'><span id='showInstructions_btn' onClick='showSOP()'>Click here </span> to view a brief SOP on how to use this.</span><span id='hideInstructions_btn' onClick='hideSOP()'>Hide SOP </span>",
  instructions_list: [
    "<li><b>URL</b> (required): Enter the target URL where you want to send users for your campaign tactic. <b>For global campaigns,</b> remove country and language designation. <ul><li> Example:</li><li class='campaignURL'> Original URL: <a href= 'https://www.cytivalifesciences.com/en/us/solutions/protein-research'>https://www.cytivalifesciences.com/en/us/solutions/protein-research </a><li class='campaignURL'>Instead use: <a href='https://www.cytivalifesciences.com/solutions/protein-research'> https://www.cytivalifesciences.com/solutions/protein-research </a></li></li></ul></li>",
    "<li> <b>SFDC campaign number </b> (required):  Enter the SFDC campaign number without any spaces.</li>",
    "<li><b>Marketing tactic</b>: Select your marketing tactic from the drop-down list.</li>",
    "<li><b>Source:</b> Select the source — where your tracking URL will be located — from the drop-down list.</li>",
    "<li><b>Description</b> (optional): Add a descriptor to differentiate your specific tactic. Type with no spaces. This will be embedded in the URL. Examples Different banner sizes or colors: 125x125, 240x400, 125x125blue  Versions for A/B testing: headerA, headerB</li>",
    "<li>Click on the “Generate URL” button to generate the tracking URL, which will appear in the box below the button.</li>",
    "<li>Test the URL to be sure it opens the target URL as intended.</li>",
    "<li>Copy the tracking URL to clipboard by clicking the “Copy URL” button. </li>",
    "<li>Paste the tracking URL into the appropriate field in your Kapost project.</li>",
    "<li>For QR code generation, take the tracking URL to <a href= 'https://www.qrcode-monkey.com/' target='_blank'> https://www.qrcode-monkey.com/ </a> and follow the steps to create a trackable QR code for use with printed materials.",
    "<li>Please reach out to the digital marketing data team with any questions.</li>"
  ]
};

// Show and hide SOP
https: https: showSOP = () => {
  $("#instructions_body ").show();
  $("#showInstructions").hide();
  $("#hideInstructions_btn").show();
};

hideSOP = () => {
  $("#instructions_body ").hide();
  $("#showInstructions").show();
  $("#hideInstructions_btn").hide();
};

// ------ Displaying instructions ----
// Instructions head
let instructionsHead = instructions.msg;
document.getElementById("instructions_head").innerHTML = instructionsHead;

// Instructions body
let instructionsBody = "";

for (i = 0; i < instructions.instructions_list.length; i++) {
  instructionsBody += instructions.instructions_list[i];
  document.getElementById("instructions_body").innerHTML = instructionsBody;
}

// ------- URL generator form data ------
// Marketing  medium and sources
const marketing_tools = [
  {
    tool_id: 00,
    medium: "",
    stored_value: "",
    sources: []
  },
  {
    tool_id: 01,
    medium: "E-mail",
    stored_value: "EM",
    sources: [
      "|",
      "INT|Internal E-mail",
      "EXV|External email vendor",
      "MSI|MSI email",
      "INCM|Internal Communication"
    ]
  },
  {
    tool_id: 02,
    medium: "Direct Mail",
    stored_value: "DM",
    sources: ["|", "EX|Direct Mail External", "VN|Direct Mail Vendor"]
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

//Populate marketing source dropdown options based on marketing medium
const populateMarketingSource = (marketing_medium, marketing_source) => {
  //When marketing medium is changed make sources options empty
  document.getElementById("marketing_source").innerHTML = "";
  document.getElementById("marketing_source").value = "";

  // putting new medium option selected by user
  var medium_option = document.getElementById(marketing_medium);
  console.log(medium_option.value);

  //Looping through marketing tools to find option entered by user
  for (i = 0; i < marketing_tools.length; i++) {
    let currentOption = marketing_tools[i].stored_value;

    // When the user entered option is found in marketing tools array
    if (currentOption === medium_option.value) {
      console.log("Match found");
      console.log(marketing_tools[i].sources);

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

//Format - {{URL}}/?extcmp={{source}}{{campaign ID}}{{Channel}}_{{Content}}
// Generating URL once user hits generate Button
$(document).ready(() => {
  // Listen to submit event on the <form> itself!
  $("#urlGeneratorForm").submit(e => {
    // Prevent form submission which refreshes page
    e.preventDefault();
    console.log("submitting form");

    let trackingURL = "";
    let URL = $("#landing_url").val() + "?extcmp=";
    trackingURL += URL;

    //Campaign code / id
    let campaign_id = $("#campaign_id")
      .val()
      .trim();
    if (campaign_id.length < 1) {
      document.getElementById("invalid-input").style.display = "inline";
      document.getElementById("campaignCode_invalidCharacters").style.display =
        "none";
      return;
    } else {
      document.getElementById("invalid-input").style.display = "none";
      if (/[^a-zA-Z0-9\-\.\_\~]/.test(campaign_id)) {
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
        trackingURL += campaign_id;
      }
    }

    // Marketing channel
    let marketing_medium = $("#marketing_medium")
      .val()
      .trim();
    marketing_medium =
      marketing_medium.length > 0 ? `-${marketing_medium}` : "";
    trackingURL += `${marketing_medium}`;

    //Marketing source
    let marketing_source = $("#marketing_source").val();
    marketing_source =
      marketing_source.length > 0 ? `-${marketing_source}` : "";
    trackingURL += `${marketing_source}`;

    //Description
    let description = $("#description")
      .val()
      .trim();

    if (description.length > 0) {
      if (/[^a-zA-Z0-9\-\.\_\~]/.test(description)) {
        document.getElementById("description_invalidCharacters").style.display =
          "inline";
        return false;
      } else {
        document.getElementById("description_invalidCharacters").style.display =
          "none";
        document.getElementById("learnMore_descriptionChars").style.display =
          "none";
        trackingURL += `-${description}`;
      }
    } else {
      document.getElementById("description_invalidCharacters").style.display =
        "none";
    }
    document.getElementById("trackingURL").innerHTML = trackingURL;
  });
});

//Copy to clipboard function
const copyToClipBoard = () => {
  var copyText = document.getElementById("trackingURL");

  if (
    $("#trackingURL")
      .val()
      .trim().length < 1
  ) {
    document.getElementById("copySucessAlert").style.display = "none";
    document.getElementById("copyFailedAlert").style.display = "block";
    return;
  } else {
    console.log("Blank field: " + HTMLTextAreaElement);
    document.getElementById("copyFailedAlert").style.display = "none";
    console.log(copyText);
    copyText.select();
    document.execCommand("copy");
    document.getElementById("copySucessAlert").style.display = "block";
  }
};

//Reset form
const resetInput = () => {
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
