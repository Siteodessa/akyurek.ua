
//            Javascript for automatic tagging File Download Links, External Links and Outbound Links
//            for use with the WiredMinds tracking. 
//            Please include this file in the <BODY> section at the bottom of every page, after the
//            WiredMinds code. 
//            WARNING: This script is using DOM manipulation and  is provided 'AS IS' without any warranties. 
//            It might not be compatible with every webpage. Conflicts with other JavaScripts are possible. 
//            Please test carefully in different browsers.
//            WiredMinds does not guarantee that, by using this script, the web page still works as intendend.
//            +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//            Created by:       WiredMinds AG
//            Last updated:	    15-Oct-2014
//            Copyright: WiredMinds AG (www.wiredminds.de)
//            +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var wmAutoTrack = function(){
	//------CONFIG
	//Download tracking configuration
	this.trackDownlodsAsEvents	= false; //Track Downloads as Events true/false (if false, they will be tracked as Pages)
	this.trackDownlodsWithPath	= true; //If true, every Download Name will include the path to it. If false, the path is "Downloads|"
	this.pathPageDownloads		= "DL|"; //Prefix for wm_page_name
	this.pathEventDownloads		= "DL/"; //Prefix for event	
	this.milestoneDownloads		= "Downloads"; //Milestone name: If empty string no milestone will be set
	
	//External Link tracking configuration
	this.trackExtLinksAsEvents	= false; //Track ExternalLinks as Events true/false (if false, they will be tracked as Pages)
	this.trackExtlinksWithPath	= false; //If true, every External Link will include the path to it. If false, the path is "ExtLink|"
	this.trackExtlinksFullUrl	= false; //If true, every External Link will include the full url instead of only the domain.
	this.pathPageExtlinks		= "ExtLink|"; //Prefix for wm_page_name
	this.pathEventExtlinks		= "ExtLinks/"; //Prefix for event	
	this.milestoneExtlinks		= "";//Milestone name: If empty string no milestone will be set

	//MailTo Link tracking configuration
	this.trackMailtoWithPath	= false; //If true, every External Link will include the path to it. If false, the path is "MailTo|"
	this.trackMailLinkAsEvents	= false; //Track Mailto Links as Events true/false(if false, they will be tracked as Pages)
	this.pathPageMailto			= "MailTo|"; //Prefix for wm_page_name
	this.pathEventMailto		= "MailTo/"; //Prefix for event	
	this.milestoneMailto		= "";//Milestone name: If empty string no milestone will be set

    this.debug					= false;  //Set to true to get debugging info into FireBug console if available
    
    // Revert the values changed by autotrack script to its original ones. 
    // NOTE: Requires the wiredminds tracking object to be already loaded, otherwise nothing will be reverted!
    // If disabled, it can lead to unforeseen results in tracked strings. 
    this.revertChangedValues     = true;
	//------END CONFIG
	
	//Save the scope
	var scope = this;
	
	/**
	 * Initiliaze the download tracking and add the event handler to the "a" elements
	 */
	this.init = function() {
		var links = document.getElementsByTagName("a");
		var linkPathname = "";
		var sourceURL = window.location.hostname;
		
		//For each link in the page, add corresponding tracking event
		for (var i=0; i < links.length; i++) {
			var currentLink = links[i];
			//add tracking
			try {
				var linkURL = currentLink.href;
				var currentDestinURL=currentLink.hostname;
				linkPathname = currentLink.pathname;
				
				//check each type of link: 1. mailTo
				if (linkURL.match(/^mailto:/i)) {
					scope.logme('Tracking '+i+' '+linkURL+' as MailTo');
					var tmpEmail = linkURL.split('mailto:');
					var eMail = tmpEmail[1]; // remove 'mailto:' from the string and leave only the e-mail address
					var wmElemType = "mailto";
					
					//Add an event listener to the current link with an anonymous function as handler to keep the current
					//params captured in a closure.
					scope.addListener(currentLink, function(wmElemType, eMail) {
						//Return the function to be called on event
						return function() {
							scope.logme('A MAILTO was clicked!');
							scope.wiredmindsTrack(wmElemType, eMail);
						}
					}(wmElemType, eMail));
				} else if (scope.compareDomains(currentDestinURL, sourceURL)) {
					//check each type of link: 2. Document
					if(linkPathname.match(/\.(pdf|txt|doc|docx|xls|xlsx|ppt|pptx|js|vsd|vxd|css|rar|zip|tar|gz|dmg|exe|wma|mov|avi|wmv|mp3|mp4|vcf)$/i)) {
						scope.logme('Tracking '+i+' '+linkURL+' as DOC');
						// Track an internal link (a file)
						var filePath = "/" + linkPathname;
						var fileDetails = filePath.split('/');
						var fileFullname = fileDetails[(fileDetails.length-1)];
						var wmElemType = "download";
						
						//Add an event listener to the current link with an anonymous function as handler to keep the current
						//params captured in a closure.
						scope.addListener(currentLink, function(wmElemType, fileFullname) {
							//Return the function to be called on event
							return function() {
								scope.logme('A FILE was clicked!');
								scope.wiredmindsTrack(wmElemType, fileFullname);
							}
						}(wmElemType, fileFullname));
					}
				} else {
					//check each type of link: 3. ExernalLink
					scope.logme('Tracking '+i+' '+linkURL+' as EXTLINK');
					// Track an external link
					var fileFullname = currentDestinURL;
					//Use the full URL
					if (scope.trackExtlinksFullUrl === true) {
						fileFullname = linkURL;
					}
					var wmElemType 	= "extlink";
					
					//Add an event listener to the current link with an anonymous function as handler to keep the current
					//params captured in a closure.
					scope.addListener(currentLink, function(wmElemType, fileFullname) {
						//Return the function to be called on event
						return function() {
							scope.logme('An ExtLink was clicked!');
							scope.wiredmindsTrack(wmElemType, fileFullname);
						}
					}(wmElemType, fileFullname));
				}
			} catch(err) {
				scope.logme('Tracking error: '+err);
			}
		}
	}
	/**
	 * Adds the passed handler function to the passed link for mousedown event.
	 * 
	 * @param	link
	 * @param	handler
	 */
	this.addListener = function(link, handler) {
		if (link.addEventListener) {link.addEventListener('mousedown', handler, true);} 
		else if (link.attachEvent) {link.attachEvent("on" + 'mousedown', handler);}
	}
	/**
	 * Reqister the tracking request.
	 * 
	 * @param	elementType
	 * @param	eventname
	 * @return	void
	 */
	this.wiredmindsTrack = function(elementType, eventname){
		//If wiredminds is not defined, just return
		if (typeof wiredminds == 'undefined') {
			return;
		}
        
        // If value changes should be reverted after the tracking request got send
        if (scope.revertChangedValues === true) {
            try {
                if (typeof wiredminds.getTrackParam === 'function') {
                    // Fetch the original values to be able to reset them again after autotrack tracking
                    var origPageName = wiredminds.getTrackParam('wm_page_name');
                    var origMilestone = wiredminds.getTrackParam('wm_milestone');
                } else {
                    scope.logme('Unable to fetch original values for reset, disabling revert.');
                    scope.revertChangedValues = false;
                }
            } catch (ex) {
                scope.logme('Unable to fetch original values for reset, disabling revert.');
                scope.revertChangedValues = false;
            }
        }
        
        
		//Track Downloads
		if (elementType == "download") {
			if (scope.trackDownlodsAsEvents){
				wiredminds.push(['trackEvent', scope.pathEventDownloads+eventname])
			}
			else {
				if (scope.trackDownlodsWithPath) {
					if (scope.milestoneDownloads !== "") {
						wiredminds.push(['setTrackParam', 'wm_milestone', scope.milestoneDownloads]);
					}
					wiredminds.push(['count', eventname]);
				} else {
					wiredminds.push(['setTrackParam', 'wm_page_name', scope.pathPageDownloads+eventname]); 
					if (scope.milestoneDownloads !== "") {
						wiredminds.push(['setTrackParam', 'wm_milestone', scope.milestoneDownloads]);
					}
					wiredminds.push(['count']);
				}
			}
		}
		//Track External Links
		if (elementType == "extlink") {
			if (scope.trackExtLinksAsEvents){
				wiredminds.push(['trackEvent', scope.pathEventExtlinks+eventname])

			}
			else {
				if (scope.trackExtlinksWithPath) {
					if (scope.milestoneExtlinks !== "") {
						wiredminds.push(['setTrackParam', 'wm_milestone', scope.milestoneExtlinks]);
					}
					wiredminds.push(['count', eventname]);				
				} else {
					wiredminds.push(['setTrackParam', 'wm_page_name', scope.pathPageExtlinks+eventname]); 
					if (scope.milestoneExtlinks !== "") {
						wiredminds.push(['setTrackParam', 'wm_milestone', scope.milestoneExtlinks]);
					}
					wiredminds.push(['count']);
				}
			}
		}
		//Track Mailtos
		if (elementType == "mailto") {
			if (scope.trackMailLinkAsEvents){
				wiredminds.push(['trackEvent', scope.pathEventMailto+eventname])

			}
			else {
				if (scope.trackMailtoWithPath) {
					if (scope.milestoneMailto !== "") {
						wiredminds.push(['setTrackParam', 'wm_milestone', scope.milestoneMailto]);
					}
					wiredminds.push(['count', eventname]);	
				} else {
					wiredminds.push(['setTrackParam', 'wm_page_name', scope.pathPageMailto+eventname]); 
					if (scope.milestoneMailto !== "") {
						wiredminds.push(['setTrackParam', 'wm_milestone', scope.milestoneMailto]);
					}
					wiredminds.push(['count']);
				}
			}
		}
        
        // Reset to the original values
        if (scope.revertChangedValues === true) {
            wiredminds.push(['setTrackParam', 'wm_page_name', origPageName]);
            wiredminds.push(['setTrackParam', 'wm_milestone', origMilestone]);
        }
	}
	/**
	 * If passed urls have the same domain
	 * 
	 * @param	url1
	 * @param	url2
	 * @return	boolean
	 */
	this.compareDomains = function(url1, url2){
		return scope.getDomain(url1) == scope.getDomain(url2);
	}
	/**
	 * Get domain from passed URL
	 * 
	 * @param	strURL
	 * @return	string
	 */
	this.getDomain = function(strURL){
		var index = strURL.lastIndexOf(".");
		index = strURL.lastIndexOf(".",index-1);

		var topDomain =  strURL.substring(index+1);
		return topDomain;
	}
	/**
	 * Do a console.log if in debug mode and available
	 * 
	 * @param	myString
	 */
	this.logme = function(myString){
		if ((scope.debug == true) && (typeof(console) !== 'undefined') && (console !== null)) {
			console.log(myString);
		}
	}
}

//Register the initialization of the automated download tracking for the onload event.
//Page must be loaded fully before we can begin adding the link event listeners.
var wmAutoTrackObj = new wmAutoTrack();
if (window.addEventListener) {
	window.addEventListener('load', wmAutoTrackObj.init, false);
} else if (window.attachEvent){
	window.attachEvent('onload', wmAutoTrackObj.init);
}