function iOwnYourLanguage(){
var language = { 
    langcheck: function() {
      var contacts = jQuery('li#menu-item-6271 a').text();
 if (contacts == 'Contacts'){
   alert('Английский');
 } 
      else {
         if (contacts == 'Контакты'){
   alert('Русский');
 } 
        else {
            if (contacts == 'Контакты'){
   alert('Русский');
 } 
          else {
            
          }
 }
      }
},  
    langchange: function() {  
      
} 
  
}

jQuery('#langa').click(function () {
  language.langcheck();  
});

}
iOwnYourLanguage()