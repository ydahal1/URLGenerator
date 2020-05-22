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
    sources: ["|", "|Events/Tradeshows/Conference"]
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

    let marketing_source = $("#marketing_source").val();
    marketing_source = marketing_source.length > 0 ? `${marketing_source}` : "";
    trackingURL += marketing_source;
    let campaign_id = $("#campaign_id").val();
    if (campaign_id.length < 1) {
      document.getElementById("invalid-input").style.display = "inline";
      return;
    } else {
      document.getElementById("invalid-input").style.display = "none";
    }
    trackingURL += campaign_id;
    let marketing_medium = $("#marketing_medium").val();
    marketing_medium = marketing_medium.length > 0 ? `${marketing_medium}` : "";
    trackingURL += marketing_medium;

    let description = $("#description").val();
    description = description.length > 0 ? `_${description}` : "";
    trackingURL += description;

    console.log(trackingURL);

    // $("#trackingURL").html(trackingURL);
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
  document.getElementById("copyFailedAlert").style.display = "none";
  document.getElementById("copySucessAlert").style.display = "none";
  document.getElementById("invalid-input").style.display = "none";
};
