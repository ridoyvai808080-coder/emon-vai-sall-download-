function enterSite(){document.getElementById("welcome").style.display="none";}
function submitListing(e){e.preventDefault();document.getElementById("msg").textContent="ডেমো লিস্টিং জমা হয়েছে। বাস্তব database যুক্ত করলে এটি সংরক্ষণ করা যাবে।";e.target.reset();}
function loginDemo(){document.getElementById("loginMsg").textContent="নিরাপদ Gmail/Phone authentication চালু করতে Firebase Authentication বা অন্য authentication provider সংযুক্ত করুন।";}
