/*
Copyright (C) 2010 Robert Gust-Bardon and Creative Commons

This file is part of Creative Commons Content Attributor.

Creative Commons Content Attributor is free software: you can redistribute
it and/or modify it under the terms of the GNU General Public License as
published by the Free Software Foundation, either version 3 of the License,
or (at your option) any later version.

Creative Commons Content Attributor is distributed in the hope that it will
be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
Public License for more details.

You should have received a copy of the GNU General Public License along
with Creative Commons Content Attributor.  If not, see
<http://www.gnu.org/licenses/>.
*/

var monaco = {
  onLoad: function() {
    this.strings = document.getElementById("monaco-strings");
    if (Components.classes["@mozilla.org/xpcom/version-comparator;1"]
          .getService(Components.interfaces.nsIVersionComparator)
          .compare( Components.classes["@mozilla.org/xre/app-info;1"]
          .getService(Components.interfaces.nsIXULAppInfo).version, "3.0b3")
      >= 0) {
      this.dialog = 'chrome://browser/content/pageinfo/pageInfo.xul';
    } else {
      this.dialog = 'chrome://browser/content/pageInfo.xul';
    }
    // this.strings.getString("helloMessageTitle")
    /*
    document.getElementById("appcontent").addEventListener(
      "DOMContentLoaded",
      void(0),
      false);
    */
  },
  display: function(e) {
    window.openDialog(monaco.dialog);
  }
};
window.addEventListener("load", function(e) { monaco.onLoad(e); }, false);
