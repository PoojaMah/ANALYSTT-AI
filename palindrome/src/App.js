
import './App.css';

function App() {
  function isPalindrome(s) {
    var rev = s.split('').reverse().join('');
    return s == rev;
  }

  function longestPalind(s) {
    var maxp_length = 0,
      maxp = '';
    for (var i = 0; i < s.length; i++) {
      var subs = s.substr(i, s.length);
      if (subs.length <= maxp_length) break; //Stop Loop for smaller strings
      for (var j = subs.length; j >= 0; j--) {
        var sub_subs = subs.substr(0, j);
        if (sub_subs.length <= maxp_length) break; // Stop loop for smaller strings
        if (isPalindrome(sub_subs)) {

            maxp_length = sub_subs.length;
            maxp = sub_subs;

        }
      }
    }
    return maxp;
  }
  console.log(longestPalind("abracadabra"));
}

export default App;
